const images = [
  { seed: 'zen-gallery-1', alt: 'Yoga studio interior' },
  { seed: 'zen-gallery-2', alt: 'Meditation session' },
  { seed: 'zen-gallery-3', alt: 'Yoga class in progress' },
  { seed: 'zen-gallery-4', alt: 'Wellness retreat' },
  { seed: 'zen-gallery-5', alt: 'Zen garden' },
]

export function Gallery() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex gap-6 overflow-x-auto pb-4">
          {images.map((img) => (
            <img
              key={img.seed}
              src={`https://picsum.photos/seed/${img.seed}/400/300`}
              alt={img.alt}
              className="h-64 w-80 flex-shrink-0 rounded-lg object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
