const images = Array.from({ length: 10 }, (_, i) => ({
  src: `https://picsum.photos/seed/gracecraft-gallery${i + 1}/300/250`,
  alt: `Church gallery image ${i + 1}`,
}))

export function Gallery() {
  return (
    <section className="flex flex-wrap bg-gallery-bg">
      {images.map((img) => (
        <a key={img.src} href={img.src} className="block w-1/2 sm:w-1/3 md:w-1/5">
          <img
            src={img.src}
            alt={img.alt}
            className="h-48 w-full object-cover transition-opacity hover:opacity-80"
            loading="lazy"
          />
        </a>
      ))}
    </section>
  )
}
