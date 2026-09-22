import { cn } from '@free-react-templates/ui'

const photos = [
  'https://picsum.photos/seed/yoga-gallery1/600/600',
  'https://picsum.photos/seed/yoga-gallery2/600/600',
  'https://picsum.photos/seed/yoga-gallery3/600/600',
  'https://picsum.photos/seed/yoga-gallery4/600/600',
  'https://picsum.photos/seed/yoga-gallery5/600/600',
  'https://picsum.photos/seed/yoga-gallery6/600/600',
  'https://picsum.photos/seed/yoga-gallery7/600/600',
  'https://picsum.photos/seed/yoga-gallery8/600/600',
]

interface GalleryProps {
  className?: string
}

export function Gallery({ className }: GalleryProps) {
  return (
    <section id="gallery" className={cn('bg-white py-20', className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-brand">
          Gallery
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-heading">Our Studio</h2>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {photos.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Studio photo ${index + 1}`}
              className="aspect-square w-full rounded-lg object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
