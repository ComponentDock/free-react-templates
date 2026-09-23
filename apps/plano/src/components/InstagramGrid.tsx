const images = [
  { src: 'https://picsum.photos/seed/plano-insta-1/600/600', alt: 'Interior design detail 1' },
  { src: 'https://picsum.photos/seed/plano-insta-2/600/600', alt: 'Interior design detail 2' },
  { src: 'https://picsum.photos/seed/plano-insta-3/600/600', alt: 'Interior design detail 3' },
] as const

export function InstagramGrid() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-primary">@Instagram</h2>
        <div className="mt-10 grid grid-cols-3 gap-0">
          {images.map((image) => (
            <a
              key={image.src}
              href="#instagram"
              className="group relative block aspect-square overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/40" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
