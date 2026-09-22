export function Gallery() {
  const images = [
    { seed: 'gymbox-gal-1', alt: 'Gym interior with modern equipment' },
    { seed: 'gymbox-gal-2', alt: 'Group fitness class in session' },
    { seed: 'gymbox-gal-3', alt: 'Personal training workout' },
    { seed: 'gymbox-gal-4', alt: 'Cardio zone with treadmills' },
    { seed: 'gymbox-gal-5', alt: 'Weight training area' },
    { seed: 'gymbox-gal-6', alt: 'Yoga and stretching studio' },
  ]

  return (
    <section id="gallery" aria-label="Photo gallery" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink">Our Gallery</h2>
        <div className="mt-12 columns-2 gap-4 sm:columns-3">
          {images.map((img, i) => (
            <div key={img.seed} className="mb-4 break-inside-avoid">
              <img
                src={`https://picsum.photos/seed/${img.seed}/${i % 2 === 0 ? '600/400' : '600/500'}`}
                alt={img.alt}
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
