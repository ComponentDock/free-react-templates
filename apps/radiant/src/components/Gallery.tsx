const galleryImages = [
  {
    src: 'https://picsum.photos/seed/radiant-1/600/400',
    alt: 'Office workspace',
    className: 'col-span-1 row-span-2',
  },
  {
    src: 'https://picsum.photos/seed/radiant-2/600/300',
    alt: 'Team meeting',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://picsum.photos/seed/radiant-3/600/300',
    alt: 'Modern desk',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://picsum.photos/seed/radiant-4/600/300',
    alt: 'Creative studio',
    className: 'col-span-1 row-span-1',
  },
  {
    src: 'https://picsum.photos/seed/radiant-5/600/300',
    alt: 'Office interior',
    className: 'col-span-1 row-span-1',
  },
] as const

export function Gallery() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, index) => (
            <a
              key={img.src}
              href={img.src}
              className={`group relative overflow-hidden rounded-lg ${index === 0 ? 'row-span-2 sm:col-span-2 sm:row-span-2' : ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
