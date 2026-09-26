const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const images = [
  { seed: 'photomuse-inst-1', alt: 'Instagram photo 1' },
  { seed: 'photomuse-inst-2', alt: 'Instagram photo 2' },
  { seed: 'photomuse-inst-3', alt: 'Instagram photo 3' },
  { seed: 'photomuse-inst-4', alt: 'Instagram photo 4' },
  { seed: 'photomuse-inst-5', alt: 'Instagram photo 5' },
]

export function InstagramGrid() {
  return (
    <section id="collection" className="py-16 max-lg:ml-0 lg:ml-64">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-bold text-heading max-md:text-2xl">
            Follow me on Instagram
          </h2>
        </div>

        <div className="grid grid-cols-5 gap-0 max-md:grid-cols-3 max-sm:grid-cols-2">
          {images.map((img) => (
            <a
              key={img.seed}
              href="#"
              className="group relative block aspect-square overflow-hidden"
              aria-label={img.alt}
            >
              <img
                src={`https://picsum.photos/seed/${img.seed}/400/400`}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand-300/0 transition-colors duration-300 group-hover:bg-brand-300/60">
                <InstagramIcon className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
