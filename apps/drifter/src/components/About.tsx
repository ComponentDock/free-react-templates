import { Briefcase, Users, Coffee } from 'lucide-react'

const stats = [
  { icon: Briefcase, value: '$2.5M', label: 'Total Projects' },
  { icon: Users, value: '1,465', label: 'Happy Clients' },
  { icon: Coffee, value: '3,965', label: 'Cups of Coffee' },
]

const skills = [
  { name: 'After Effects', pct: 85 },
  { name: 'Photoshop', pct: 90 },
  { name: 'Illustrator', pct: 70 },
  { name: 'Figma', pct: 95 },
  { name: 'Sketch', pct: 75 },
  { name: 'Framer', pct: 80 },
]

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: text + stats */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-heading">About Myself</h2>
            <p className="mt-4 leading-relaxed text-body-muted">
              Inappropriate behavior is often laughed off as &ldquo;boys will be boys,&rdquo; but
              women face higher conduct standards especially in the workplace. That&rsquo;s why
              it&rsquo;s crucial that our behavior is beyond reproach. I bring a meticulous eye for
              detail and a passion for beautiful, functional design to every project.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center">
                  <Icon className="mx-auto h-8 w-8 text-brand-purple" />
                  <p className="mt-2 font-heading text-2xl font-bold text-heading">{value}</p>
                  <p className="text-xs text-body-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: skill bars */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-heading">Tools Expertness</h3>
            <div className="mt-6 space-y-5">
              {skills.map(({ name, pct }) => (
                <div key={name}>
                  <div className="flex justify-between text-sm">
                    <span className="text-heading">{name}</span>
                    <span className="text-body-muted">{pct}%</span>
                  </div>
                  <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-light-bg">
                    <div
                      className="h-full rounded-full bg-brand-purple transition-all"
                      style={{ width: `${pct}%` }}
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
