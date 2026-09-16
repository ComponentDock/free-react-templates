const GALLERY_IMAGES = Array.from({ length: 10 }, (_, i) => ({
  src: `https://picsum.photos/seed/crescent-gallery${i + 1}/400/400`,
  alt: `Gallery image ${i + 1}`,
}))

export function Gallery() {
  return (
    <section className="flex flex-wrap" data-testid="gallery">
      {GALLERY_IMAGES.map((img) => (
        <a key={img.alt} href="#" className="block w-1/2 md:w-1/4 lg:w-1/5">
          <img
            src={img.src}
            alt={img.alt}
            className="h-40 w-full object-cover transition-opacity hover:opacity-80"
            loading="lazy"
          />
        </a>
      ))}
    </section>
  )
}
