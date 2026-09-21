import { cn } from '@free-react-templates/ui'

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

const INSTAGRAM_IMAGES = [
  'https://picsum.photos/seed/crispshot-ig-1/400/400',
  'https://picsum.photos/seed/crispshot-ig-2/400/400',
  'https://picsum.photos/seed/crispshot-ig-3/400/400',
  'https://picsum.photos/seed/crispshot-ig-4/400/400',
  'https://picsum.photos/seed/crispshot-ig-5/400/400',
  'https://picsum.photos/seed/crispshot-ig-6/400/400',
]

interface InstagramFeedProps {
  className?: string
}

export function InstagramFeed({ className }: InstagramFeedProps) {
  return (
    <section className={cn('py-20 bg-bg-light', className)} data-testid="instagram-feed">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-2">Follow Instagram</h2>
          <p className="text-text-secondary">@Crispshot_photographer</p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_IMAGES.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              data-testid={`instagram-item-${index}`}
            >
              <img
                src={src}
                alt={`Instagram photo ${index + 1}`}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-2">
                <InstagramIcon size={24} />
                <span className="text-white text-xs font-medium">@Crispshot_photographer</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
