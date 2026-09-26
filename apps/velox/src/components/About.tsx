import { Database, BookOpen, Users } from 'lucide-react'

const stats = [
  { icon: Database, value: '$2.5M', label: 'Total Donation' },
  { icon: BookOpen, value: '1465', label: 'Total Projects' },
  { icon: Users, value: '3965', label: 'Total Volunteers' },
]

const skills = [
  { name: 'After Effects', pct: 85 },
  { name: 'Photoshop', pct: 90 },
  { name: 'Illustrator', pct: 70 },
  { name: 'Sublime', pct: 95 },
  { name: 'Sketch', pct: 75 },
]

export function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — bio + stats */}
          <div>
            <h2 className="text-2xl font-bold uppercase text-gray-900 font-[family-name:var(--font-heading)]">
              About Myself
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Inappropriate behavior is often laughed off as &ldquo;boys will be boys,&rdquo; women
              face higher conduct standards especially in the workplace. That&rsquo;s why it&rsquo;s
              crucial that, as women, our behavior on the job is beyond reproach.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center">
                  <Icon className="mx-auto mb-2 h-6 w-6 text-periwinkle-400" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-gray-900 font-[family-name:var(--font-heading)]">
                    {value}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — skill bars */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-gray-900 font-[family-name:var(--font-heading)]">
              Tools Expertness
            </h3>
            <div className="space-y-5">
              {skills.map(({ name, pct }) => (
                <div key={name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-700">{name}</span>
                    <span className="text-gray-500">{pct}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-periwinkle-400 to-sky-400 transition-all duration-700"
                      style={{ width: `${pct}%` }}
                      role="progressbar"
                      aria-valuenow={pct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${name} ${pct}%`}
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
