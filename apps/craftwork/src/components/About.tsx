import { Mail, Phone, MapPin, Calendar } from 'lucide-react'

const skills = [
  { name: 'UI/UX Design', pct: 95 },
  { name: 'Frontend Development', pct: 88 },
  { name: 'Branding', pct: 82 },
  { name: 'Photography', pct: 75 },
]

const info = [
  { icon: Calendar, label: 'Birthday', value: 'May 1, 1990' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: Mail, label: 'Email', value: 'john@craftwork.dev' },
  { icon: MapPin, label: 'Address', value: 'San Francisco, CA' },
]

export function About() {
  return (
    <section id="about" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            About Me
          </span>
          <h2 className="mt-2 text-4xl font-bold text-ink">
            A passionate designer crafting digital experiences
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Bio + Skills */}
          <div>
            <p className="mb-6 leading-relaxed text-mist">
              With over a decade of experience in UI/UX design and frontend development, I create
              intuitive and visually compelling digital products. My approach blends research-driven
              design with clean, maintainable code to deliver experiences that delight users and
              drive business results.
            </p>

            <div className="space-y-4">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="mb-1 flex items-center justify-between text-sm font-medium text-ink">
                    <span>{s.name}</span>
                    <span>{s.pct}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-brand transition-all duration-700"
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Info */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-xl bg-cloud p-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-mist">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
