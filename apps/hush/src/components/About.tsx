import { Reveal } from './Reveal'

const stats = [
  { value: '35+', label: 'Years of Ministry' },
  { value: '12,000+', label: 'Retreat Guests' },
  { value: '80', label: 'Acres of Silence' },
  { value: '4', label: 'Daily Prayer Offices' },
] as const

export function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28 dark:bg-stone-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 60}
              className="rounded-2xl bg-stone-50 p-8 text-center dark:bg-stone-900"
            >
              <p className="font-heading text-4xl font-semibold text-primary-600 dark:text-primary-300">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium tracking-wide text-stone-600 uppercase dark:text-stone-400">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-medium tracking-wider text-primary-600 uppercase dark:text-primary-400">
              Our Story
            </p>
            <h2 className="font-heading mt-3 text-3xl font-light text-stone-900 sm:text-4xl lg:text-5xl dark:text-white">
              A Place Set Apart
            </h2>
            <p className="mt-6 leading-relaxed text-stone-600 dark:text-stone-300">
              Hush Retreat was founded in 1987 by a small community of contemplatives who longed for
              a place where silence could do its quiet work. What began as a handful of cabins
              beside a spring-fed creek has grown into eighty acres of forest, meadow, and trail —
              set apart for anyone seeking rest, prayer, and a deeper acquaintance with God.
            </p>
            <p className="mt-4 leading-relaxed text-stone-600 dark:text-stone-300">
              Today our community still gathers for the daily offices, welcomes guests from every
              walk of life, and offers spiritual direction to those who ask for a companion on the
              way.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src="https://picsum.photos/seed/hush-about/1200/900"
              alt="The retreat chapel among the trees"
              className="w-full rounded-3xl object-cover shadow-soft-lg"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
