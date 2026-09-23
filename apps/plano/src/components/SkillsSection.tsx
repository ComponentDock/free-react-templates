const skills = [
  { label: 'Architecture', value: 60 },
  { label: '3D Design', value: 65 },
  { label: 'Interior', value: 80 },
] as const

export function SkillsSection() {
  return (
    <section id="about" className="bg-skills-bg py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-11">
          <div className="md:col-span-6">
            <img
              src="https://picsum.photos/seed/plano-skills/800/800"
              alt="Interior design workspace"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="md:col-span-5">
            <h2 className="text-3xl font-bold text-primary">Professional and creative mind</h2>
            <p className="mt-6 text-sm leading-relaxed text-text-secondary">
              Our team of seasoned designers and architects bring decades of combined experience to
              every project, ensuring each space is both beautiful and functional.
            </p>

            <div className="mt-8 space-y-6">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary">{skill.label}</span>
                    <span className="text-sm text-text-secondary">{skill.value}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full bg-gray-200">
                    <div className="h-full bg-primary" style={{ width: `${skill.value}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#about"
              className="mt-8 inline-block border border-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-white"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
