const images = Array.from({ length: 5 }).map((_, i) => ({
  src: `https://picsum.photos/seed/sportium-gallery-${i + 1}/400/300`,
  alt: `Gallery image ${i + 1}`,
}))

export function Gallery() {
  return (
    <section className="bg-white py-4">
      <div className="flex gap-4 overflow-x-auto px-4 pb-4 snap-x">
        {images.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="h-48 w-64 shrink-0 snap-center rounded object-cover"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}
