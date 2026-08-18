import { instagramImages } from '../data'
import { InstagramIcon } from './BrandIcons'

export function Instagram() {
  return (
    <section aria-label="Instagram gallery" className="overflow-x-auto bg-white">
      <div className="flex w-max">
        {instagramImages.map((image, i) => (
          <figure key={image} className="group relative shrink-0">
            <img
              src={image}
              alt={`Instagram photo ${i + 1}`}
              className="size-60 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute inset-0 flex items-center justify-center bg-ink/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <InstagramIcon className="size-9 text-white" />
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
