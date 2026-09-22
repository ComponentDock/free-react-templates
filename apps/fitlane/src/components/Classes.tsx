const classes = [
  {
    name: 'Aerobics',
    description:
      'Aenean auctor nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus. Sed porta vel.',
    image: 'https://picsum.photos/seed/fitlane-aerobics/400/300',
  },
  {
    name: 'Pilates',
    description:
      'Auctor nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus. Sed porta vel lacus quis.',
    image: 'https://picsum.photos/seed/fitlane-pilates/400/300',
  },
  {
    name: 'Yoga',
    description:
      'Nsl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus. Sed porta vel lacus quis lacinia.',
    image: 'https://picsum.photos/seed/fitlane-yoga/400/300',
  },
] as const

export function Classes() {
  return (
    <section id="classes" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-500">
            Our Programs
          </p>
          <h2 className="font-display text-3xl font-bold text-ink">Classes</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {classes.map((cls) => (
            <div key={cls.name} className="flex flex-col items-center text-center">
              <h3 className="mb-3 font-display text-lg font-bold uppercase tracking-wide text-ink">
                {cls.name}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted">{cls.description}</p>
              <img
                src={cls.image}
                alt={`${cls.name} instructor`}
                loading="lazy"
                className="w-full max-w-[280px] rounded object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
