const images = [
  { seed: 'ministry-gallery1', alt: 'Gallery image 1' },
  { seed: 'ministry-gallery2', alt: 'Gallery image 2' },
  { seed: 'ministry-gallery3', alt: 'Gallery image 3' },
  { seed: 'ministry-gallery4', alt: 'Gallery image 4' },
  { seed: 'ministry-gallery5', alt: 'Gallery image 5' },
  { seed: 'ministry-gallery6', alt: 'Gallery image 6' },
  { seed: 'ministry-gallery7', alt: 'Gallery image 7' },
]

export function Gallery() {
  return (
    <section className="py-16">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-brand text-sm font-medium uppercase tracking-wider">Gallery</span>
          <h2 className="text-3xl font-normal mt-2">Galleries</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {images.slice(0, 4).map((img) => (
            <a
              key={img.seed}
              href="#"
              className="block relative overflow-hidden aspect-square group"
              aria-label={`View ${img.alt}`}
            >
              <img
                src={`https://picsum.photos/seed/${img.seed}/400/400`}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/40 transition-colors duration-300" />
            </a>
          ))}
          <a
            href="#"
            className="block relative overflow-hidden col-span-2 md:col-span-2 aspect-video group"
            aria-label="View gallery image 5"
          >
            <img
              src="https://picsum.photos/seed/ministry-gallery5/800/400"
              alt="Gallery image 5"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/40 transition-colors duration-300" />
          </a>
          {images.slice(5, 7).map((img) => (
            <a
              key={img.seed}
              href="#"
              className="block relative overflow-hidden aspect-square group"
              aria-label={`View ${img.alt}`}
            >
              <img
                src={`https://picsum.photos/seed/${img.seed}/400/400`}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/40 transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
