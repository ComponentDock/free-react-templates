import { galleryCategories, gallerySectionLabel } from '../data'
import { GalleryCard } from './GalleryCard'

export function Gallery() {
  return (
    <section id="gallery" aria-label={gallerySectionLabel}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-0 sm:grid-cols-2 lg:grid-cols-3">
        {galleryCategories.map((category) => (
          <GalleryCard key={category.name} category={category} />
        ))}
      </div>
    </section>
  )
}
