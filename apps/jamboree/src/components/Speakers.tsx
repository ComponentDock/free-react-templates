import { BrandIcon } from './BrandIcon'

const speakers: ReadonlyArray<{ name: string; role: string; image: string }> = [
  {
    name: 'Sarah Mitchell',
    role: 'Keynote Speaker',
    image: 'https://picsum.photos/seed/jamboree-sp1/400/400',
  },
  {
    name: 'David Chen',
    role: 'Panel Moderator',
    image: 'https://picsum.photos/seed/jamboree-sp2/400/400',
  },
  {
    name: 'Emily Watson',
    role: 'Workshop Lead',
    image: 'https://picsum.photos/seed/jamboree-sp3/400/400',
  },
]

export function Speakers() {
  return (
    <section id="speaker" className="bg-paper py-24 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-ink dark:text-white">Our Speakers</h2>
          <p className="mx-auto max-w-2xl text-mist">
            Learn from industry leaders and experts who are shaping the future of technology and
            business.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="text-center">
              <div className="group relative mx-auto h-64 w-64 overflow-hidden rounded-full">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end opacity-0 transition-opacity duration-300 group-hover:opacity-80">
                  <div className="flex gap-3">
                    <a
                      href="#"
                      aria-label={`${speaker.name} on LinkedIn`}
                      className="text-white transition-transform hover:scale-110"
                    >
                      <BrandIcon name="linkedin" className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      aria-label={`${speaker.name} on X`}
                      className="text-white transition-transform hover:scale-110"
                    >
                      <BrandIcon name="x" className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      aria-label={`${speaker.name} on GitHub`}
                      className="text-white transition-transform hover:scale-110"
                    >
                      <BrandIcon name="instagram" className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-ink dark:text-white">
                {speaker.name}
              </h3>
              <p className="mt-2 text-sm text-mist">{speaker.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
