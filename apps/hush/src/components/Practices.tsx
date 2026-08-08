import { BookOpen, CircleDot, Compass, Eye, Footprints, Pause } from 'lucide-react'
import { Reveal } from './Reveal'

const practices = [
  {
    icon: Compass,
    title: 'Centering Prayer',
    blurb: "A method of silent prayer that rests in God's presence beyond thoughts and words.",
  },
  {
    icon: BookOpen,
    title: 'Lectio Divina',
    blurb: 'A slow, prayerful reading of scripture — read, meditate, respond, and rest.',
  },
  {
    icon: Footprints,
    title: 'Walking Meditation',
    blurb: 'A mindful walk along forest trails, attending to each step as an act of prayer.',
  },
  {
    icon: CircleDot,
    title: 'Labyrinth Walk',
    blurb: 'An ancient winding path through the meadow, a pilgrimage in miniature.',
  },
  {
    icon: Eye,
    title: 'Examen',
    blurb: 'An evening review of the day, noticing where God was present and giving thanks.',
  },
  {
    icon: Pause,
    title: 'Silent Sitting',
    blurb: 'Simply being still before God — no agenda, no words, just presence.',
  },
] as const

export function Practices() {
  return (
    <section id="practices" className="bg-stone-100 py-20 lg:py-28 dark:bg-stone-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-primary-600 uppercase dark:text-primary-400">
            Contemplative Practices
          </p>
          <h2 className="font-heading mt-3 text-3xl font-light text-stone-900 sm:text-4xl lg:text-5xl dark:text-white">
            Ancient Paths to the Present
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            Time-tested ways of attending to God, offered daily and taught by our community.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {practices.map((practice, index) => (
            <Reveal
              key={practice.title}
              delay={index * 80}
              className="rounded-2xl bg-white p-8 shadow-soft transition-shadow hover:shadow-soft-lg dark:bg-stone-950"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300">
                <practice.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-heading mt-6 text-xl font-semibold text-stone-900 dark:text-white">
                {practice.title}
              </h3>
              <p className="mt-3 leading-relaxed text-stone-600 dark:text-stone-400">
                {practice.blurb}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
