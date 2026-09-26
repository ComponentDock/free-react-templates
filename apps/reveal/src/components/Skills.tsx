const skills = [
  { label: 'WordPress', percentage: 90 },
  { label: 'HTML/CSS', percentage: 99 },
  { label: 'JavaScript', percentage: 95 },
  { label: 'Design', percentage: 100 },
]

export function Skills() {
  return (
    <section id="skills" className="bg-dark-lighter py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">My Skills</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill.label} className="text-center">
              <div className="mb-2 text-5xl font-bold text-brand">{skill.percentage}%</div>
              <div className="text-sm text-white/60">{skill.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
