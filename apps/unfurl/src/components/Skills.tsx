const skills = [
  { name: 'WordPress', percentage: 85 },
  { name: 'HTML/CSS', percentage: 95 },
  { name: 'JavaScript', percentage: 80 },
  { name: 'Design', percentage: 90 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-12">
          My Skills
        </h2>

        <div className="max-w-3xl space-y-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-[family-name:var(--font-heading)] text-sm font-semibold text-white">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-400">{skill.percentage}%</span>
              </div>
              <div className="w-full h-2 bg-dark-card rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand rounded-full transition-all duration-1000"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
