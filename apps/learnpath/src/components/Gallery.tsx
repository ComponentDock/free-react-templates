const images = Array.from({ length: 14 }, (_, i) => ({
  src: `https://picsum.photos/seed/learnpath-gallery-${i + 1}/400/400`,
  alt: `Gallery image ${i + 1}`,
}))

export function Gallery() {
  return (
    <section className="py-0">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {images.map((img, i) => (
          <div
            key={img.src}
            className={
              i === 0
                ? 'col-span-2 row-span-2'
                : i === 5
                  ? 'col-span-2'
                  : i === 10
                    ? 'col-span-3'
                    : ''
            }
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
