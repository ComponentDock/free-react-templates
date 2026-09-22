import { cn } from '@free-react-templates/ui'

const galleryImages = [
  { seed: 'hibiscus-gallery-1', alt: 'Hotel lobby' },
  { seed: 'hibiscus-gallery-2', alt: 'Hotel pool' },
  { seed: 'hibiscus-gallery-3', alt: 'Hotel restaurant' },
  { seed: 'hibiscus-gallery-4', alt: 'Hotel room' },
]

export function Gallery({ className }: { className?: string }) {
  return (
    <section className={cn('py-24 bg-paper', className)}>
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-2 text-center font-heading text-sm font-semibold uppercase tracking-[4px] text-brand">
          Gallery
        </p>
        <h2 className="mb-12 text-center font-heading text-3xl font-bold text-ink sm:text-4xl">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {galleryImages.map((img) => (
            <div key={img.seed} className="group relative overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${img.seed}/400/300`}
                alt={img.alt}
                className="h-48 w-full object-cover transition group-hover:scale-110 lg:h-64"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand/0 transition group-hover:bg-brand/60">
                <div className="flex h-full items-center justify-center opacity-0 transition group-hover:opacity-100">
                  <span className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                    {img.alt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
