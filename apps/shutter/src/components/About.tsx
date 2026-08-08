import { Award } from 'lucide-react'

const awards = [
  'International Photography Award - Gold (2024)',
  'Fearless Photographer of the Year (2023)',
  'National Geographic Featured Photographer',
  'Best Wedding Photographer - NYC (2022)',
]

export function About() {
  return (
    <section id="about" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://picsum.photos/seed/shutter-about/600/700"
            alt="Photographer at work with a camera"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            About Elena
          </h2>
          <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
            I am a passionate visual storyteller with over 12 years of experience capturing the raw
            beauty of life&apos;s most meaningful moments — from intimate portraits to grand
            celebrations.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
            My work has been published in Vogue, National Geographic, and Harper&apos;s Bazaar.
            Based in New York, I travel worldwide for destination shoots.
          </p>
          <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-gray-900 dark:text-white">
            Awards &amp; Recognition
          </h3>
          <ul className="mt-4 space-y-3">
            {awards.map((award) => (
              <li key={award} className="flex items-start gap-3">
                <Award
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">{award}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
