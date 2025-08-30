import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WebCapabilitiesSection } from './components/WebCapabilitiesSection';
import { ContactSection } from './components/ContactSection';
import OntologyGraph from './components/OntologyGraph';

export default function WebDeveloperPortfolio() {
	return (
		<main className="min-h-screen bg-[#0D1117] text-white">
			<HeroSection />
			<OntologyGraph />
			<SkillsSection />
			<ProjectsSection />
			<WebCapabilitiesSection />
			<ContactSection />
		</main>
	);
}
