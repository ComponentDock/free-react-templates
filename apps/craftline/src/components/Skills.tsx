const skills = [
  { name: 'Photoshop', percent: 75, color: 'bg-brand' },
  { name: 'JavaScript', percent: 60, color: 'bg-emerald-500' },
  { name: 'HTML5', percent: 85, color: 'bg-violet-500' },
  { name: 'CSS3', percent: 90, color: 'bg-amber-500' },
  { name: 'WordPress', percent: 70, color: 'bg-rose-500' },
  { name: 'SEO', percent: 80, color: 'bg-cyan-500' },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <span className="text-sm font-medium text-brand uppercase tracking-wider">
          My Specialty
        </span>
        <h2 className="text-3xl font-bold text-text-primary mt-2 mb-6">My Skills</h2>

        <p className="text-text-secondary mb-8">
          The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild
          Question Marks and devious Semikoli, but the Little Blind Text didn&apos;t listen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <h3 className="text-sm font-semibold text-text-primary">{skill.name}</h3>
                <span className="text-sm text-text-muted">{skill.percent}%</span>
              </div>
              <div className="w-full h-3 bg-bg-tertiary rounded-full overflow-hidden">
                <div
                  className={`h-full ${skill.color} rounded-full transition-all duration-1000`}
                  style={{ width: `${skill.percent}%` }}
                  role="progressbar"
                  aria-valuenow={skill.percent}
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
