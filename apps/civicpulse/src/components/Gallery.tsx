const images = [
  {
    seed: 'civicpulse-gallery1',
    alt: 'Political rally event',
    cols: 'col-span-8',
    rows: 'row-span-2',
  },
  { seed: 'civicpulse-gallery2', alt: 'Campaign meeting', cols: 'col-span-4', rows: 'row-span-1' },
  {
    seed: 'civicpulse-gallery3',
    alt: 'Community outreach',
    cols: 'col-span-4',
    rows: 'row-span-1',
  },
  {
    seed: 'civicpulse-gallery4',
    alt: 'Voter registration drive',
    cols: 'col-span-6',
    rows: 'row-span-1',
  },
  { seed: 'civicpulse-gallery5', alt: 'Party convention', cols: 'col-span-6', rows: 'row-span-1' },
] as const

export function Gallery() {
  return (
    <section id="gallery" className="bg-paper py-20 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Our Gallery
          </span>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">Our Gallery Archive</h2>
        </div>
        <div className="mt-14 grid grid-cols-12 gap-4">
          {images.map((img) => (
            <div key={img.seed} className={`${img.cols} ${img.rows} overflow-hidden rounded-xl`}>
              <img
                src={`https://picsum.photos/seed/${img.seed}/800/600`}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
