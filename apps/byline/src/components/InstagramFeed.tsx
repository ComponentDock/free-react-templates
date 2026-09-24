import { BrandIcon } from './BrandIcon'

const images = Array.from({ length: 8 }, (_, i) => ({
  src: `https://picsum.photos/seed/byline-insta${i + 1}/300/300`,
  alt: `Instagram post ${i + 1}`,
}))

export function InstagramFeed() {
  return (
    <section className="bg-paper transition-colors dark:bg-gray-950" aria-label="Instagram feed">
      <div className="grid grid-cols-4 sm:grid-cols-8">
        {images.map((img) => (
          <a
            key={img.src}
            href="#"
            className="group relative aspect-square overflow-hidden"
            aria-label="View on Instagram"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <BrandIcon name="instagram" className="h-6 w-6 text-brand" />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
