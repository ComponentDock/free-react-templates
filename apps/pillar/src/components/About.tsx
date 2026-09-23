import { Check } from 'lucide-react'

const points = [
  'Asperiores modi sed',
  'Enim cum voluptas',
  'Commodi aliquid aspernatur',
  'Cupiditate fuga ipsum commodi',
]

export function About() {
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded">
            <img
              src="https://picsum.photos/seed/pillar-about/700/500"
              alt="Architecture interior"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h4 className="mb-1 text-sm font-semibold uppercase tracking-wider text-accent">
              Learn To Know
            </h4>
            <h2 className="mb-6 text-3xl font-bold text-gray-900">About Us</h2>
            <p className="mb-6 leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fuga ipsum
              commodi aliquid aspernatur, eos quos incidunt, perspiciatis, ad saepe, magnam error
              adipisci vitae ut provident alias! Odit asperiores modi sed.
            </p>
            <ul className="mb-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-gray-700">
                  <Check className="h-4 w-4 text-accent" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block rounded bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Read More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
