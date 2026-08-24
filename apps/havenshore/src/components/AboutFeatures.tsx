const FEATURES = [
  {
    title: 'A world-class restaurant',
    description:
      'Havenshore extends along a private, quiet and beautiful tropical beach. Stay away from the crowd and enjoy the beauty and tranquility.',
    imageSeed: 'havenshore-restaurant',
    reverse: false,
  },
  {
    title: 'Swimming Pool',
    description:
      'Havenshore extends along a private, quiet and beautiful tropical beach. Stay away from the crowd and enjoy the beauty and tranquility.',
    imageSeed: 'havenshore-pool',
    reverse: true,
  },
  {
    title: 'Party Center',
    description:
      'Havenshore extends along a private, quiet and beautiful tropical beach. Stay away from the crowd and enjoy the beauty and tranquility.',
    imageSeed: 'havenshore-party',
    reverse: false,
  },
]

export function AboutFeatures() {
  return (
    <section className="bg-paper py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-display text-3xl font-medium text-ink md:text-4xl">
            Joyful experiences for you and your family
          </h2>
        </div>

        <div className="space-y-16">
          {FEATURES.map((feat) => (
            <div
              key={feat.title}
              className={`flex flex-col items-center gap-8 ${
                feat.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <div className="w-full md:w-7/12">
                <img
                  src={`https://picsum.photos/seed/${feat.imageSeed}/700/450`}
                  alt={feat.title}
                  className="h-[350px] w-full rounded-xl object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-5/12">
                <h3 className="mb-4 font-display text-2xl font-medium text-ink">{feat.title}</h3>
                <p className="text-mist">{feat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
