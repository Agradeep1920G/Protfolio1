import React from 'react';

export const SkillsSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-[#161B22]">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">Technical Expertise</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
					{[
						{
							category: 'Programming Languages',
							skills: [
								{ name: 'C', level: 90 },
								{ name: 'C++', level: 90 },
								{ name: 'Java', level: 85 },
								{ name: 'Python', level: 95 },
							],
							icon: '💻',
							color: 'from-blue-500 to-blue-700',
						},
						{
							category: 'Web Development',
							skills: [
								{ name: 'React.js', level: 90 },
								{ name: 'Next.js', level: 88 },
								{ name: 'Firebase', level: 85 },
								{ name: 'Tailwind CSS', level: 92 },
							],
							icon: '🌐',
							color: 'from-green-500 to-green-700',
						},
						{
							category: 'Cybersecurity & Tools',
							skills: [
								{ name: 'Burp Suite', level: 80 },
								{ name: 'Network Security', level: 82 },
								{ name: 'Pen Testing', level: 75 },
								{ name: 'JWT/Auth Systems', level: 85 },
							],
							icon: '🛡️',
							color: 'from-red-500 to-red-700',
						},
						{
							category: 'Machine Learning & Data',
							skills: [
								{ name: 'Machine Learning', level: 88 },
								{ name: 'NLP (BERT, RoBERTa)', level: 85 },
								{ name: 'Data Science (Pandas, NumPy)', level: 90 },
								{ name: 'TensorFlow/Scikit-learn', level: 82 },
							],
							icon: '🤖',
							color: 'from-purple-500 to-purple-700',
						},
						{
							category: 'Core CS Subjects',
							skills: [
								{ name: 'DBMS', level: 90 },
								{ name: 'Operating Systems', level: 88 },
								{ name: 'Computer Networks', level: 85 },
								{ name: 'Computer Architecture', level: 80 },
							],
							icon: '📘',
							color: 'from-yellow-500 to-orange-600',
						},
						{
							category: 'DevOps & Deployment',
							skills: [
								{ name: 'CI/CD (GitHub Actions)', level: 85 },
								{ name: 'Vercel', level: 90 },
								{ name: 'Docker', level: 75 },
								{ name: 'AWS Basics', level: 70 },
							],
							icon: '🚀',
							color: 'from-pink-500 to-purple-600',
						},
					].map((category) => (
						<div
							key={category.category}
							className="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all"
						>
							<div className="flex items-center gap-3 mb-6">
								<span className="text-3xl">{category.icon}</span>
								<h3 className="text-xl font-bold">{category.category}</h3>
							</div>
							<div className="space-y-4">
								{category.skills.map((skill) => (
									<div key={skill.name}>
										<div className="flex justify-between text-sm mb-1">
											<span>{skill.name}</span>
											<span className="text-gray-400">{skill.level}%</span>
										</div>
										<div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
											<div
												className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`}
												style={{ width: `${skill.level}%` }}
											></div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
