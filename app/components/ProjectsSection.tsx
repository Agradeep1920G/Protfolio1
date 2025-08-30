import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Projects</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'Smart Lost & Found System',
							description:
								'Campus automation web app built with Next.js and Firebase to streamline reporting and recovery of lost items.',
							metrics: {
								deployment: 'Vercel',
								auth: 'JWT + Firebase',
								collaboration: 'Real-time',
							},
							techDetails: [
								'Next.js + TypeScript',
								'Firebase (Auth, Firestore, Cloud Functions)',
								'JWT-based secure login',
								'Nodemailer for notifications',
								'CI/CD with GitHub + Vercel',
							],
							image: '/images/lostfound.png',
						},
						{
							title: 'PlanX - Task Manager',
							description:
								'Productivity platform for smart scheduling, reminders, and insights. Built in a microservices architecture.',
							metrics: {
								users: '20+ tested',
								insights: 'Smart Scheduling',
								deployment: 'Vercel',
							},
							techDetails: [
								'Next.js + React + TypeScript',
								'Firebase Firestore & Cloud Functions',
								'Automated Reminders',
								'CI/CD with GitHub Actions',
							],
							image: '/images/planx.png',
						},
						{
							title: 'Sentiment Analysis on Online Reviews',
							description:
								'Machine Learning project analyzing Intel processor reviews using NLP. Achieved 92% accuracy with BERT.',
							metrics: {
								model: 'BERT',
								accuracy: '92%',
								framework: 'TensorFlow',
							},
							techDetails: [
								'Python, Pandas, NumPy',
								'Scikit-learn, TensorFlow',
								'BERT & RoBERTa NLP Models',
								'BeautifulSoup + ScraperAPI',
								'Flask + React Visualization',
							],
							image: '/images/sentiment.png',
						},
						{
							title: 'CPU Scheduling Simulator',
							description:
								'Python-based GUI simulator for OS scheduling algorithms like FCFS, Round Robin, and Priority Scheduling.',
							metrics: {
								algorithms: '5+',
								accuracy: '100% simulation',
								platform: 'Python GUI',
							},
							techDetails: [
								'Python + Tkinter (GUI)',
								'Matplotlib for Gantt Charts',
								'Implemented FCFS, SJN, RR, Priority, MLQ',
								'Educational OS Project',
							],
							image: '/images/cpu.png',
						},
					].map((project) => (
						<div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-400">{project.description}</p>

									{/* Performance / Metrics */}
									<div className="space-y-3">
										<h4 className="text-base sm:text-lg font-semibold">Highlights</h4>
										<div className="grid grid-cols-3 gap-2 sm:gap-4">
											{Object.entries(project.metrics).map(([key, value]) => (
												<div key={key} className="text-center">
													<div className="text-lg font-bold text-blue-400">{value}</div>
													<div className="text-sm text-gray-400 capitalize">{key}</div>
												</div>
											))}
										</div>
									</div>

									{/* Technical Implementation */}
									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technical Implementation</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
											{project.techDetails.map((detail) => (
												<li key={detail} className="flex items-center gap-2">
													<span className="text-green-400">▹</span>
													<span className="text-gray-300">{detail}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								<div className="relative h-full min-h-[300px] lg:min-h-full">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 50vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
