import { Layers, Palette, Smartphone, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Layers,
    title: 'Strategy & Research',
    desc: 'Data-driven strategies tailored to your business goals, market positioning, and competitive landscape.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Beautiful, intuitive interfaces designed with your users in mind. From wireframes to polished prototypes.',
  },
  {
    icon: Smartphone,
    title: 'Web Development',
    desc: 'Scalable, performant web applications built with modern technologies and best practices.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    desc: 'Comprehensive marketing campaigns that drive traffic, engagement, and conversions.',
  },
] as const

export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body dark:text-gray-400">
            We deliver end-to-end digital solutions that help businesses grow and thrive in the
            modern landscape.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-gray-100 bg-mist p-8 text-center transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                <s.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-ink dark:text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body dark:text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
