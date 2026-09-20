import { Check } from 'lucide-react'

const features = [
  'Write On Your Business Card',
  'Advertising Outdoors',
  'Effective Advertising Pointers',
  'Quick Directory Add Url Free',
]

export function About() {
  return (
    <section id="about" className="bg-paper py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/convene-about/700/500"
              alt="Conference presentation"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
              About Conference
            </h2>
            <p className="mt-6 leading-relaxed text-mist dark:text-gray-400">
              When I first got into the online advertising business, I was looking for the magical
              combination that would put my website into the top search engine rankings, catapult me
              to the forefront of the minds of individuals looking to buy my product, and generally
              make me rich beyond my wildest dreams! After succeeding in the business for this long,
              I&apos;m able to look back on my old self with this kind of thinking and shake my
              head.
            </p>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-ink dark:text-white">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-8 inline-block rounded-full bg-gradient-to-r from-brand to-brand-pink px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            >
              Discover Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
