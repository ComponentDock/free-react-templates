const skills = [
  { name: 'HTML', percent: 81, color: 'bg-green-title' },
  { name: 'CSS', percent: 93, color: 'bg-yellow-progress' },
  { name: 'PSD', percent: 72, color: 'bg-pink-progress' },
  { name: 'Design', percent: 99, color: 'bg-blue-progress' },
]

export function Expertise() {
  return (
    <section id="expertise" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_370px]">
          {/* Content */}
          <div className="space-y-10">
            <p
              className="max-w-lg text-gray-text leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Our team possesses deep expertise across all facets of digital design and development.
              We stay ahead of the curve to deliver cutting-edge solutions.
            </p>

            {/* Progress bars */}
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span
                      className="text-sm font-bold text-navy-body"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {skill.name}
                    </span>
                    <span
                      className="text-sm text-gray-text"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {skill.percent}%
                    </span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gray-100">
                    <div
                      className={`h-3 rounded-full ${skill.color}`}
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Title block */}
          <div className="flex h-[370px] w-[370px] flex-col items-center justify-center bg-green-title">
            <span
              className="text-6xl font-bold text-green-num"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              06
            </span>
            <span
              className="mt-2 text-2xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Expertise
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
