import { SectionHeading } from './SectionHeading'

const shows = [
  {
    title: 'This Is The Day',
    time: 'Friday 1:00pm — 2:30pm',
    host: 'Wendy Matos',
    image: 'https://picsum.photos/seed/decibel-show-1/600/400',
  },
  {
    title: 'Electro Party',
    time: 'Friday 1:00pm — 2:30pm',
    host: 'Gaby Tenda',
    image: 'https://picsum.photos/seed/decibel-show-2/600/400',
  },
  {
    title: 'Classic Hits',
    time: 'Friday 1:00pm — 2:30pm',
    host: 'James Tenda',
    image: 'https://picsum.photos/seed/decibel-show-3/600/400',
  },
  {
    title: 'Classic Songs',
    time: 'Friday 1:00pm — 2:30pm',
    host: 'Troy Peters',
    image: 'https://picsum.photos/seed/decibel-show-4/600/400',
  },
] as const

export function Shows() {
  return (
    <section id="shows" className="bg-night py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Upcoming Shows"
          intro="Catch the freshest mixes, live sets and interviews across the Decibel network every week."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {shows.map((show) => (
            <a
              key={show.title}
              href="#shows"
              className="group relative block overflow-hidden bg-dark"
            >
              <div className="h-[300px] overflow-hidden">
                <img
                  src={show.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="inline bg-primary px-1 font-display text-xl text-white shadow-[10px_0_0_#e3207b]">
                  {show.title}
                </h3>
                <span className="mt-2 block text-sm text-white/60">{show.time}</span>
                <span className="block text-sm text-white/60">with {show.host}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
