import { CheckSquare } from 'lucide-react'

const checklist = [
  'Safes & Safe Deposit Boxes',
  'Car Locksmith & Car Alarm Systems',
  'Residential & Commercial Locksmith',
  'We Are Awesome People To Meet',
  'Digital & Electronic Lock',
] as const

export function WhyChooseUs() {
  return (
    <section aria-label="Why choose us" className="bg-gray-50 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Left — staggered image grid */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://picsum.photos/seed/keycraft-choose-1/400/500"
            alt="Locksmith working on a lock"
            className="mt-8 rounded object-cover shadow-md"
            loading="lazy"
          />
          <img
            src="https://picsum.photos/seed/keycraft-choose-2/400/350"
            alt="Security equipment"
            className="rounded object-cover shadow-md"
            loading="lazy"
          />
          <img
            src="https://picsum.photos/seed/keycraft-choose-3/400/350"
            alt="Modern lock system"
            className="rounded object-cover shadow-md"
            loading="lazy"
          />
          <img
            src="https://picsum.photos/seed/keycraft-choose-4/400/300"
            alt="Professional locksmith tools"
            className="mt-8 rounded object-cover shadow-md"
            loading="lazy"
          />
        </div>

        {/* Right — content */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-400">
            Why choose us?
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase text-teal sm:text-4xl">
            Why choose us?
          </h2>
          <p className="mt-5 leading-relaxed text-smoke">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus commodo
            viverra maecenas accumsan lacus vel facilisis.
          </p>

          <ul className="mt-6 space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-smoke">
                <CheckSquare
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary-400"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-block rounded bg-primary-400 px-8 py-3 font-bold text-navy transition-colors hover:bg-primary-500"
          >
            Get a quote
          </a>
        </div>
      </div>
    </section>
  )
}
