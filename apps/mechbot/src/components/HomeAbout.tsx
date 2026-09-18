import { CheckCircle } from 'lucide-react'

const highlights = [
  'Industry-leading robotic kits since 2018',
  'Over 10,000 units shipped worldwide',
  'Award-winning STEM education platform',
  'Open-source firmware and SDK',
]

export function HomeAbout() {
  return (
    <section id="about" className="bg-surface py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row">
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/mechbot-about/550/400"
            alt="Mechbot team working on robotic prototypes"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="flex-1">
          <span className="inline-block rounded-full bg-brand-light px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            About Mechbot
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
            Pioneering Accessible Robotics
          </h2>
          <p className="mt-4 text-body">
            Mechbot was founded to make robotics accessible to everyone — from curious students to
            professional engineers. Our kits combine cutting-edge hardware with intuitive software
            so you can focus on building, not debugging.
          </p>
          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-heading">
                <CheckCircle
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
