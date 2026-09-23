import { Scale, Users, Award, Trophy } from 'lucide-react'

const STATS = [
  { icon: Scale, value: '89%', label: 'Successful Case' },
  { icon: Users, value: '421', label: 'Trusted Clients' },
  { icon: Award, value: '392', label: 'Expert Lawyers' },
  { icon: Trophy, value: '913', label: 'Honors and Awards' },
]

export function WhyChooseUs() {
  return (
    <section
      id="cases"
      className="relative bg-cover bg-center bg-no-repeat py-20 text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(41, 52, 98, 0.85), rgba(41, 52, 98, 0.85)), url('https://picsum.photos/seed/jurist-stats/1600/900')",
      }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold uppercase md:text-4xl">Why Clients Choose Us?</h2>
          <p className="mb-8 text-gray-200">
            Our track record speaks for itself. We combine experience, dedication, and strategic
            thinking to deliver outstanding results.
          </p>
          <a
            href="#contact"
            className="inline-block bg-brand px-8 py-3 font-bold uppercase tracking-wider text-white transition-colors hover:bg-amber-600"
          >
            Free Consultation
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-brand">
                <stat.icon size={28} />
              </div>
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
