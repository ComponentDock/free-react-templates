const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const images = Array.from({ length: 6 }, (_, i) => ({
  src: `https://picsum.photos/seed/palatable-insta${i + 1}/400/400`,
  alt: `Instagram photo ${i + 1}`,
}))

export function InstagramGallery() {
  return (
    <section aria-label="Instagram gallery">
      <div className="container mx-auto px-4 py-8">
        <h5 className="text-lg font-semibold text-ink text-center mb-6 uppercase tracking-wider">
          Follow Us On Instagram
        </h5>
      </div>
      <div className="flex flex-wrap">
        {images.map((img, i) => (
          <div key={i} className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/6 group overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/60 transition-colors duration-300 flex items-center justify-center">
              <InstagramIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
