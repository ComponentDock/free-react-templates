import { Check } from 'lucide-react'

const highlights = [
  'Fully certified mechanics with decades of combined experience.',
  'State-of-the-art diagnostic equipment and tools.',
  'Genuine OEM parts with full manufacturer warranty.',
  'Transparent pricing with no hidden fees or surprises.',
] as const

export function ChooseUs() {
  return (
    <section className="overflow-hidden bg-mist">
      <div className="mx-auto grid max-w-7xl items-center md:grid-cols-2">
        <div
          className="h-72 bg-cover bg-center md:h-[500px]"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/veloce-choose/800/600)' }}
        />
        <div className="px-6 py-12 md:px-12 lg:px-16">
          <h2 className="font-display text-3xl font-bold leading-tight text-ink">
            We Have 20 Years
            <br />
            Of Experience In Auto Car
          </h2>
          <p className="mt-4 text-sm text-smoke">
            Trusted by thousands of car owners for reliable, professional automotive care.
          </p>
          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-body">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#about"
            className="mt-8 inline-block rounded-sm bg-primary-400 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-500"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  )
}
