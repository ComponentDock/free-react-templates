const events = [
  {
    day: 25,
    month: 'Nov',
    title: 'New York Event',
    organizer: 'Loredana Papp | Design School NY',
    desc: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce quis tempus elit...',
  },
  {
    day: 25,
    month: 'Nov',
    title: 'Sydney Design Conference',
    organizer: 'Loredana Papp | Design School NY',
    desc: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce quis tempus elit...',
  },
  {
    day: 25,
    month: 'Nov',
    title: 'Madrid Design Conference',
    organizer: 'Loredana Papp | Design School NY',
    desc: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce quis tempus elit...',
  },
  {
    day: 25,
    month: 'Nov',
    title: 'Workshop and more',
    organizer: 'Loredana Papp | Design School NY',
    desc: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce quis tempus elit...',
  },
]

export function Events() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="mb-12 text-center text-3xl font-bold text-ink">Event Calendar</h3>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {events.map((e) => (
            <div key={e.title} className="flex gap-6">
              <div className="flex flex-col items-center justify-center rounded bg-brand-pink px-4 py-3 text-center text-white">
                <span className="text-2xl font-bold">{e.day}</span>
                <span className="text-xs uppercase tracking-wider">{e.month}</span>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-ink">
                  <a href="#" className="transition-colors hover:text-brand-pink">
                    {e.title}
                  </a>
                </h5>
                <p className="mt-1 text-xs text-smoke">{e.organizer}</p>
                <p className="my-4 text-sm leading-relaxed text-smoke">{e.desc}</p>
                <a
                  href="#"
                  className="text-sm font-semibold uppercase tracking-wider text-brand-pink transition-colors hover:text-brand-orange"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="gradient-border-btn inline-flex items-center gap-2 border-2 px-8 py-3 text-sm font-semibold uppercase tracking-[2px] text-ink transition-all hover:text-white"
          >
            Discover It
          </a>
        </div>
      </div>
    </section>
  )
}
