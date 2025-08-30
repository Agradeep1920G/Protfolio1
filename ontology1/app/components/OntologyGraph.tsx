"use client";
import React, { useEffect } from "react";
import cytoscape from "cytoscape";

export default function OntologyGraph() {
  useEffect(() => {
    fetch("/ontology.json")
      .then((res) => res.json())
      .then((data) => {
        const elements: any[] = [];
        const addedNodes = new Set<string>();

        // Helper: safely add node if missing
        const ensureNode = (id: string, label?: string, type?: string) => {
          if (!addedNodes.has(id)) {
            elements.push({
              data: { id, label: label || id, type: type || "Unknown" }
            });
            addedNodes.add(id);
          }
        };

        // First: Add all defined nodes
        data["@graph"].forEach((item: any) => {
          ensureNode(item["@id"], item.name, item["@type"]);
        });

        // Second: Add relations + missing targets
        data["@graph"].forEach((item: any) => {
          const relations = ["hasSkill", "hasProject", "hasCertification", "studiedAt", "workedOn", "usesTool"];
          relations.forEach((rel) => {
            if (item[rel]) {
              item[rel].forEach((target: string) => {
                ensureNode(target); // make sure target exists
                elements.push({
                  data: { source: item["@id"], target, label: rel }
                });
              });
            }
          });
        });

        // Init Cytoscape
        cytoscape({
          container: document.getElementById("cy"),
          elements,
          style: [
            {
              selector: "node",
              style: {
                label: "data(label)",
                "text-valign": "center",
                "text-halign": "center",
                "background-color": (ele) => {
                  const type = ele.data("type");
                  switch (type) {
                    case "Person": return "#3b82f6";
                    case "Project": return "#22c55e";
                    case "Skill": return "#f59e0b";
                    case "Certification": return "#ec4899";
                    case "Education": return "#8b5cf6";
                    case "Experience": return "#06b6d4";
                    default: return "#9ca3af";
                  }
                },
                color: "white",
                "font-size": "10px",
                "text-outline-width": 2,
                "text-outline-color": "#0d1117",
                "border-width": 2,
                "border-color": "#1f2937"
              }
            },
            {
              selector: "edge",
              style: {
                label: "data(label)",
                "curve-style": "bezier",
                "target-arrow-shape": "triangle",
                "arrow-scale": 1,
                "line-color": "#6b7280",
                "target-arrow-color": "#6b7280",
                "font-size": "8px",
                color: "#9ca3af"
              }
            }
          ],
          layout: { name: "cose", animate: true, animationDuration: 1000 }
        });
      });
  }, []);

  return (
    <section className="py-12 sm:py-20 px-4 bg-[#161B22]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Ontology Graph of My Profile
        </h2>
        <div
          id="cy"
          className="w-full h-[600px] rounded-xl shadow-lg bg-[#0D1117]"
        ></div>
      </div>
    </section>
  );
}
