const skills = [
  { name: 'HTML', percent: 78 },
  { name: 'CSS', percent: 91 },
  { name: 'JavaScript', percent: 58 },
  { name: 'React', percent: 63 },
  { name: 'TypeScript', percent: 85 },
] as const

export function About() {
  return (
    <section id="about" className="bg-section-gray py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wider text-ink sm:text-4xl">
              We are Theme Creator
            </h2>
            <p className="mt-6 text-body leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit aspernatur aut odit aut fugit.
            </p>
            <p className="mt-4 text-body leading-relaxed">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
            <a
              href="#"
              className="mt-6 inline-block bg-primary-400 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-500"
            >
              Learn More
            </a>
          </div>

          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm font-bold text-ink">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="mt-2 h-2.5 w-full bg-gray-200">
                  <div
                    className="h-full bg-primary-400 transition-all duration-1000"
                    style={{ width: `${skill.percent}%` }}
                    role="progressbar"
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name} ${skill.percent}%`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
