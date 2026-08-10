import { Cake, Camera, Church, Music, Palmtree, Shirt } from 'lucide-react'

const items = [
  { title: 'The Dress', blurb: 'Find the gown that makes you feel unmistakably you.', icon: Shirt },
  {
    title: 'The Venue',
    blurb: 'From vineyards to ballrooms — we secure the perfect setting.',
    icon: Church,
  },
  {
    title: 'The Cake',
    blurb: 'Designs as unique as your love story, layered with flavor.',
    icon: Cake,
  },
  {
    title: 'Photography',
    blurb: 'A team that documents your day without staging a second of it.',
    icon: Camera,
  },
  {
    title: 'Music',
    blurb: 'Ceremony strings, dinner jazz, and a dance floor that never empties.',
    icon: Music,
  },
  {
    title: 'Honeymoon',
    blurb: 'Planning the getaway you will talk about for the rest of your lives.',
    icon: Palmtree,
  },
]

export function GetReady() {
  return (
    <section id="when-where" className="bg-night-900 py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-serif text-4xl font-bold text-white sm:text-5xl">
          Get ready with us
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-stone-300">
          From the first fitting to the final farewell, we are beside you for every step of the
          journey.
        </p>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <li
                key={item.title}
                className="flex gap-4 rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:border-accent-500/50"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-accent-500">
                  <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-serif text-lg font-semibold text-white">{item.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-stone-300">{item.blurb}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
