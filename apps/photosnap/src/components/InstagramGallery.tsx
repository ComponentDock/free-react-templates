import { SocialIcon } from './SocialIcon'

const PHOTOS = [1, 2, 3, 4, 5]

export function InstagramGallery() {
  return (
    <section aria-labelledby="insta-heading" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="insta-heading" className="text-2xl font-display text-center mb-10 text-ink">
          Follow me on Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-0">
          {PHOTOS.map((n) => (
            <a
              key={n}
              href="#"
              className="group relative block h-[200px] overflow-hidden"
              aria-label={`Instagram photo ${n}`}
            >
              <img
                src={`https://picsum.photos/seed/photosnap-insta-${n}/400/400`}
                alt={`Instagram photo ${n}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <SocialIcon name="instagram" size={40} className="text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
