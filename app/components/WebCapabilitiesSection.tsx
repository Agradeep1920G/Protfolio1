import React from 'react';

export const WebCapabilitiesSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Core Capabilities</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{[
						{
							title: 'Cybersecurity',
							icon: '🛡️',
							features: [
								'Penetration Testing',
								'Vulnerability Assessment',
								'Secure Authentication (JWT, Firebase)',
								'Security Headers & Policies',
							],
						},
						{
							title: 'Full-Stack Web Development',
							icon: '🌐',
							features: [
								'Next.js + React.js',
								'Firebase (Auth, Firestore, Cloud Functions)',
								'Tailwind CSS for responsive UI',
								'CI/CD with GitHub Actions & Vercel',
							],
						},
						{
							title: 'Machine Learning & AI',
							icon: '🤖',
							features: [
								'Natural Language Processing (BERT, RoBERTa)',
								'Sentiment Analysis & Text Classification',
								'Python (Scikit-learn, TensorFlow)',
								'Data Preprocessing & Visualization',
							],
						},
						{
							title: 'Core CS Knowledge',
							icon: '📘',
							features: [
								'Operating Systems (Scheduling, Processes)',
								'Database Management Systems',
								'Computer Networks',
								'Computer Architecture',
							],
						},
						{
							title: 'DevOps & Deployment',
							icon: '🚀',
							features: [
								'Continuous Integration/Deployment',
								'Docker & Containerization',
								'Hosting on Vercel & AWS',
								'Performance Optimization',
							],
						},
						{
							title: 'Teamwork & Problem Solving',
							icon: '🤝',
							features: [
								'Agile/Scrum Collaboration',
								'Open-source Contributions',
								'Hackathons & Academic Projects',
								'Mentoring & Community Volunteering',
							],
						},
					].map((category) => (
						<div
							key={category.title}
							className="group bg-[#161B22] p-6 rounded-lg hover:bg-[#21262D] transition-all"
						>
							<div className="text-3xl mb-4">{category.icon}</div>
							<h3 className="text-xl font-bold mb-3">{category.title}</h3>
							<ul className="space-y-2">
								{category.features.map((feature) => (
									<li
										key={feature}
										className="text-gray-400 group-hover:text-gray-300 transition-colors"
									>
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
