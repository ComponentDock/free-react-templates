import { Check } from 'lucide-react'

const highlights = [
  'Certified personal trainers',
  'Modern strength & cardio equipment',
  'Flexible membership options',
] as const

export function About() {
  return (
    <section id="about" className="bg-cloud py-20 transition-colors dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-brand">
            About Pump
          </p>
          <h2 className="font-display text-4xl font-black uppercase text-ink dark:text-white">
            Welcome To Our Gym
          </h2>
          <p className="mt-6 leading-relaxed text-mist dark:text-gray-400">
            On her way she met a copy. The copy warned the Little Blind Text, that where it came
            from it would have been rewritten a thousand times and everything that was left from its
            origin would be the word.
          </p>
          <ul className="mt-8 space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-ink dark:text-gray-200">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-gradient-to-br from-brand to-brand-orange text-white">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/seed/pump-about/640/560"
            alt="Inside the Pump gym"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
