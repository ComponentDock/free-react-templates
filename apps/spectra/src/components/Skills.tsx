const SKILLS = [
  { name: 'Photoshop', percentage: 75, color: 'bg-brand' },
  { name: 'jQuery', percentage: 60, color: 'bg-green-500' },
  { name: 'HTML5', percentage: 85, color: 'bg-orange-500' },
  { name: 'CSS3', percentage: 90, color: 'bg-purple-500' },
]

export function Skills() {
  return (
    <section id="skills" className="bg-light py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-medium uppercase tracking-[3px] text-brand">
            Skills
          </span>
          <h2 className="mb-4 text-[40px] font-semibold text-dark">My Skills</h2>
          <p className="mx-auto max-w-2xl text-text-light">
            I&apos;ve worked with a variety of technologies and tools to create exceptional digital
            experiences.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {SKILLS.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-base font-semibold text-dark">{skill.name}</h3>
                <span className="text-sm font-medium text-text-light">{skill.percentage}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                <div
                  className={`h-full rounded-full ${skill.color} transition-all duration-1000`}
                  style={{ width: `${skill.percentage}%` }}
                  role="progressbar"
                  aria-valuenow={skill.percentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
