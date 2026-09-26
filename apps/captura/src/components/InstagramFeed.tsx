const images = [1, 2, 3, 4, 5, 6]

export function InstagramFeed() {
  return (
    <section className="py-0">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
        {images.map((n) => (
          <div key={n} className="group relative overflow-hidden">
            <img
              src={`https://picsum.photos/seed/captura-insta-${n}/400/400`}
              alt={`Instagram photo ${n}`}
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-dark/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <a href="#" aria-label="Instagram" className="text-white">
                <svg
                  className="h-6 w-6"
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
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
