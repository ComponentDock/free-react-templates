import { Lightbulb, DollarSign, Megaphone, Headphones } from 'lucide-react'

const services = [
  {
    icon: Lightbulb,
    title: 'Market Research',
    desc: 'Deep insights into market trends and consumer behavior to guide your strategic decisions.',
  },
  {
    icon: DollarSign,
    title: 'Financial Services',
    desc: 'Comprehensive financial planning and analysis to optimize your business performance.',
  },
  {
    icon: Megaphone,
    title: 'Online Marketing',
    desc: 'Data-driven digital marketing strategies that drive traffic and conversions.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Round-the-clock assistance to ensure your business operations run smoothly.',
  },
]

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {services.map((s) => (
                <div key={s.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <s.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{s.title}</h3>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-mist">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="text-center lg:text-right">
              <span className="font-display text-sm font-semibold uppercase tracking-widest text-brand">
                Providing
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
                What We Can Do for You
              </h2>
            </div>
            <div
              className="mt-8 h-[400px] rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url(https://picsum.photos/seed/cleanpage-about/600/400)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
