const events = [
  {
    title: 'Sharing Our Faith & Gospel',
    image: 'https://picsum.photos/seed/vesper-7/400/300',
  },
  {
    title: 'Community Bible Study',
    image: 'https://picsum.photos/seed/vesper-8/400/300',
  },
  {
    title: 'Youth Gathering',
    image: 'https://picsum.photos/seed/vesper-9/400/300',
  },
  {
    title: 'Prayer Morning',
    image: 'https://picsum.photos/seed/vesper-10/400/300',
  },
  {
    title: 'Choir Practice',
    image: 'https://picsum.photos/seed/vesper-11/400/300',
  },
  {
    title: 'Fellowship Meal',
    image: 'https://picsum.photos/seed/vesper-12/400/300',
  },
] as const

export function Events() {
  return (
    <section id="events">
      {/* Photo heading band */}
      <div className="relative flex h-[300px] items-start justify-center overflow-hidden bg-gray-900 sm:h-[500px]">
        <img
          src="https://picsum.photos/id/1067/1920/1080"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <div className="relative z-10 pt-16 text-center sm:pt-20">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold sm:text-sm">
            Events
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-5xl">
            Upcoming Events
          </h2>
        </div>
      </div>

      {/* Events list */}
      <div className="bg-section-bg py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.title}
                className="flex overflow-hidden rounded-lg bg-white shadow-sm"
              >
                <img
                  src={event.image}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-32 shrink-0 object-cover sm:w-40"
                />
                <div className="flex items-center p-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
                      8:30am - 11:30am
                    </span>
                    <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-gray-900">
                      <a href="#events" className="transition-colors hover:text-gold-dark">
                        {event.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-xs text-gray-500">by pastor: Jerry Simon</p>
                    <p className="mt-1 text-xs text-gray-500">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </p>
                    <a
                      href="#events"
                      className="mt-3 inline-block rounded bg-gold px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-gold-dark"
                    >
                      Join Us
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
