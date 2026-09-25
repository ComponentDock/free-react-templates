const skills = [
  { label: 'HTML', percent: 81 },
  { label: 'CSS', percent: 93 },
  { label: 'PSD', percent: 72 },
  { label: 'Design', percent: 99 },
]

export function Skills() {
  return (
    <section id="skills" className="bg-brand-dark py-20">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="shrink-0 md:w-1/4">
            <span className="block font-heading text-8xl font-bold text-white/10 md:text-[120px]">
              06
            </span>
            <h2 className="mt-2 -translate-y-4 font-heading text-2xl font-bold uppercase tracking-wider text-white">
              Expertise
            </h2>
          </div>
          <div className="flex-1">
            <p className="mb-8 font-body text-base leading-relaxed text-white/70">
              Our team possesses deep expertise across all areas of digital design and development,
              ensuring we deliver excellence in every project.
            </p>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-heading text-sm font-medium uppercase tracking-wider text-white">
                      {skill.label}
                    </span>
                    <span className="font-heading text-sm font-bold text-brand-yellow">
                      {skill.percent}%
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-brand-yellow transition-all duration-1000"
                      style={{ width: `${skill.percent}%` }}
                      role="progressbar"
                      aria-valuenow={skill.percent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.label} proficiency: ${skill.percent}%`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
