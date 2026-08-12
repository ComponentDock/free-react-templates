import { SectionHeading } from './SectionHeading'

const podcasts = [
  {
    title: 'Classic Songs For Classic People',
    time: 'Friday 1:00pm — 2:30pm',
    image: 'https://picsum.photos/seed/decibel-podcast-1/800/600',
    large: true,
  },
  {
    title: 'Weekend Warm-Up Mix',
    time: 'Saturday 9:00am — 11:00am',
    image: 'https://picsum.photos/seed/decibel-podcast-2/800/400',
    large: false,
  },
  {
    title: 'Late Night Sessions',
    time: 'Sunday 11:00pm — 1:00am',
    image: 'https://picsum.photos/seed/decibel-podcast-3/800/400',
    large: false,
  },
] as const

export function Podcasts() {
  return (
    <section id="podcasts" className="bg-night pb-12 pt-2 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Podcasts"
          intro="Our resident hosts pick the episodes everyone is talking about this week."
        />
        <div className="flex flex-col gap-6 md:flex-row">
          {podcasts.map((podcast) => (
            <a
              key={podcast.title}
              href="#podcasts"
              className={`group relative block overflow-hidden bg-dark ${podcast.large ? 'md:flex-1' : 'md:ml-auto'}`}
            >
              <div
                className={`overflow-hidden ${podcast.large ? 'h-[420px]' : 'h-[200px] md:h-[200px]'}`}
              >
                <img
                  src={podcast.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="inline bg-primary px-1 font-display text-lg text-white shadow-[10px_0_0_#e3207b]">
                  {podcast.title}
                </h3>
                <span className="mt-2 block w-fit bg-black px-1 text-sm text-white shadow-[10px_0_0_#000]">
                  {podcast.time}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
