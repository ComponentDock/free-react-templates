const styles = [
  {
    title: 'Hatha Yoga',
    description: 'Traditional yoga focusing on physical postures and breathing techniques.',
    image: 'https://picsum.photos/seed/namastay-hatha/400/300',
  },
  {
    title: 'Vinyasa Flow',
    description: 'Dynamic movement synchronized with breath for a flowing practice.',
    image: 'https://picsum.photos/seed/namastay-vinyasa/400/300',
  },
  {
    title: 'Yin Yoga',
    description: 'Slow-paced style with poses held for longer periods for deep stretching.',
    image: 'https://picsum.photos/seed/namastay-yin/400/300',
  },
]

export function YogaStyles() {
  return (
    <section className="bg-paper-alt py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-display mb-8 text-center text-3xl font-bold text-ink">
          Perfect Yoga Style
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {styles.map((style) => (
            <div key={style.title} className="overflow-hidden rounded-lg bg-white shadow-md">
              <img
                src={style.image}
                alt={style.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-ink">{style.title}</h3>
                <p className="mt-2 text-sm text-mist">{style.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
