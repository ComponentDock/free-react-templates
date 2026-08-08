import { CalendarCheck } from 'lucide-react'
import { Reveal } from './Reveal'

const directors = [
  {
    name: 'Sr. Margaret Anne, OSB',
    role: 'Director of Spiritual Formation',
    specialties: 'Centering Prayer · Discernment · Life Transitions',
    availability: 'Mon–Thu',
    image: 'hush-director-1',
  },
  {
    name: 'Fr. David Brennan',
    role: 'Retreat Director',
    specialties: 'Ignatian Exercises · Lectio Divina',
    availability: 'Tue–Sat',
    image: 'hush-director-2',
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Director of Contemplative Studies',
    specialties: 'Christian Mystics · The Examen',
    availability: 'Mon, Wed, Fri',
    image: 'hush-director-3',
  },
  {
    name: 'Brother Thomas',
    role: 'Guest Companion',
    specialties: 'Walking Meditation · Hospitality',
    availability: 'Daily',
    image: 'hush-director-4',
  },
] as const

export function Directors() {
  return (
    <section id="directors" className="bg-stone-100 py-20 lg:py-28 dark:bg-stone-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-primary-600 uppercase dark:text-primary-400">
            Spiritual Direction
          </p>
          <h2 className="font-heading mt-3 text-3xl font-light text-stone-900 sm:text-4xl lg:text-5xl dark:text-white">
            Companions for the Journey
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            Seasoned guides who listen well, pray with you, and walk beside you for a season.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {directors.map((director, index) => (
            <Reveal
              key={director.name}
              delay={index * 80}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-soft transition-shadow hover:shadow-soft-lg dark:bg-stone-950"
            >
              <img
                src={`https://picsum.photos/seed/${director.image}/400/400`}
                alt={`Portrait of ${director.name}`}
                className="h-40 w-full rounded-xl object-cover"
              />
              <h3 className="font-heading mt-5 text-lg font-semibold text-stone-900 dark:text-white">
                {director.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-300">
                {director.role}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                {director.specialties}
              </p>
              <p className="mt-4 flex items-center gap-1.5 text-xs font-medium tracking-wide text-stone-500 uppercase dark:text-stone-400">
                <CalendarCheck className="h-3.5 w-3.5" aria-hidden="true" />
                {director.availability}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
