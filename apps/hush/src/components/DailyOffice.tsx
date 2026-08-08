import { Moon, Sun, Sunrise, Sunset } from 'lucide-react'
import { Reveal } from './Reveal'

const offices = [
  {
    icon: Sunrise,
    name: 'Lauds',
    time: '6:30 AM',
    blurb: 'Morning prayer — praise for the new day as light breaks over the valley.',
  },
  {
    icon: Sun,
    name: 'Midday Prayer',
    time: '12:00 PM',
    blurb: 'A pause at noon to recollect the day and return to the presence of God.',
  },
  {
    icon: Sunset,
    name: 'Vespers',
    time: '5:30 PM',
    blurb: 'Evening prayer of thanksgiving as the sun sets beyond the ridgeline.',
  },
  {
    icon: Moon,
    name: 'Compline',
    time: '8:30 PM',
    blurb: "Night prayer — a quiet close to the day, committing rest into God's hands.",
  },
] as const

export function DailyOffice() {
  return (
    <section id="rhythm" className="bg-primary-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-primary-300 uppercase">
            Daily Office
          </p>
          <h2 className="font-heading mt-3 text-3xl font-light text-white sm:text-4xl lg:text-5xl">
            A Rhythm of Prayer
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-300">
            Four times daily, our community gathers in the chapel to pray, to listen, and to hold
            the world before God in silence.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((office, index) => (
            <Reveal
              key={office.name}
              delay={index * 80}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white">
                <office.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-heading mt-5 text-xl font-semibold text-white">{office.name}</h3>
              <p className="mt-1 text-sm font-medium tracking-widest text-primary-300 uppercase">
                {office.time}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-stone-300">{office.blurb}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
