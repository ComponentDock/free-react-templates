const galleryImages = [
  { src: 'https://picsum.photos/seed/riviere-g1/400/300', alt: 'Gallery image 1' },
  { src: 'https://picsum.photos/seed/riviere-g2/400/300', alt: 'Gallery image 2' },
  { src: 'https://picsum.photos/seed/riviere-g3/400/300', alt: 'Gallery image 3' },
  { src: 'https://picsum.photos/seed/riviere-g4/400/300', alt: 'Gallery image 4' },
  { src: 'https://picsum.photos/seed/riviere-g5/400/300', alt: 'Gallery image 5' },
]

export function Gallery() {
  return (
    <section className="bg-white dark:bg-gray-950" aria-label="Gallery">
      <div className="flex w-full overflow-hidden">
        {galleryImages.map((img) => (
          <div key={img.src} className="h-48 w-1/5 min-w-[20%]">
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
