const SKILLS = [
  { name: 'UI/UX', percent: 95 },
  { name: 'Web Development', percent: 90 },
  { name: 'Branding', percent: 85 },
  { name: 'Photography', percent: 80 },
  { name: 'Marketing', percent: 75 },
  { name: 'SEO', percent: 70 },
]

export function Skills() {
  return (
    <section id="skills-section" className="bg-light-bg py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-gold">
            My Skills
          </span>
          <h2 className="text-3xl font-semibold md:text-4xl">Skills &amp; Expertise</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {SKILLS.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm font-medium text-gold">{skill.percent}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-gold transition-all duration-500"
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
