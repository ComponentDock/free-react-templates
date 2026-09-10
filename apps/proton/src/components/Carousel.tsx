export function Carousel() {
  const images = [
    { seed: 'proton-slide-1', alt: 'Business workspace' },
    { seed: 'proton-slide-2', alt: 'Team collaboration' },
    { seed: 'proton-slide-3', alt: 'Modern office' },
  ]

  return (
    <section id="blog" className="overflow-hidden">
      <div className="flex">
        {images.map(({ seed, alt }) => (
          <img
            key={seed}
            src={`https://picsum.photos/seed/${seed}/1920/600`}
            alt={alt}
            className="h-[400px] w-full flex-shrink-0 object-cover sm:h-[500px]"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}
