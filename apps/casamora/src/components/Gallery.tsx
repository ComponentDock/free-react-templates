import { cn } from '@free-react-templates/ui'

const GALLERY_IMAGES = [1, 2, 3, 4, 5, 6, 7]

interface GalleryProps {
  className?: string
}

export function Gallery({ className }: GalleryProps) {
  return (
    <section className={cn('bg-white py-20', className)}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-3xl font-semibold text-heading-text">
            See The Gallery
          </h2>
          <span className="mx-auto mb-8 block h-1 w-12 rounded bg-brand" />
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {GALLERY_IMAGES.map((n) => (
            <img
              key={n}
              src={`https://picsum.photos/seed/casamora-gallery-${n}/800/600`}
              alt={`Gallery photo ${n}`}
              className="h-60 w-80 flex-shrink-0 object-cover"
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="text-sm font-medium text-brand transition-colors hover:text-brand-dark"
          >
            View More Photos
          </a>
        </div>
      </div>
    </section>
  )
}
