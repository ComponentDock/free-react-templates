import { instagramImages } from '../data'
import { BrandIcon } from './BrandIcon'

export function Instagram() {
  return (
    <section aria-label="Instagram gallery" className="bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {instagramImages.map((image, i) => (
          <a
            key={image}
            href="#"
            aria-label={`Instagram photo ${i + 1}`}
            className="group relative block"
          >
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="aspect-square w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
              <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand text-black opacity-0 transition-opacity group-hover:opacity-100">
                <BrandIcon name="instagram" className="h-6 w-6" />
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
