const images = Array.from({ length: 9 }, (_, i) => ({
  src: `https://picsum.photos/seed/alleluia-gallery${i + 1}/400/300`,
  alt: `Church gallery image ${i + 1}`,
}))

export function Gallery() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="font-oldstandard text-4xl font-bold text-text-primary text-center mb-12">
          Our Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <a key={img.alt} href={img.src} target="_blank" rel="noopener noreferrer">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 object-cover rounded hover:opacity-80 transition-opacity"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
