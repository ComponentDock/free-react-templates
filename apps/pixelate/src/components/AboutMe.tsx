interface Skill {
  label: string
  percentage: number
}

const skills: Skill[] = [
  { label: 'User Interface Design', percentage: 60 },
  { label: 'User Experience', percentage: 89 },
  { label: 'Illustration', percentage: 95 },
]

export function AboutMe() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display mb-6 text-3xl font-bold text-ink md:text-4xl">About Me</h2>
          <p className="mb-4 leading-relaxed text-mist">
            I&apos;m a passionate digital product designer with over 8 years of experience creating
            intuitive, user-centered interfaces. My approach combines strategic thinking with
            meticulous attention to visual detail.
          </p>
          <p className="leading-relaxed text-mist">
            &quot;Great design is invisible — it just works. My goal is to craft experiences that
            feel natural and effortless while solving real problems.&quot;
          </p>
        </div>
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.label}>
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-medium text-ink">{skill.label}</p>
                <span className="text-sm font-semibold text-brand">{skill.percentage}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-brand transition-all duration-700"
                  style={{ width: `${skill.percentage}%` }}
                  role="progressbar"
                  aria-valuenow={skill.percentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${skill.label}: ${skill.percentage}%`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
