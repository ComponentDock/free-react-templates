const photos = [
  'https://picsum.photos/seed/filmvault-ig1/400/400',
  'https://picsum.photos/seed/filmvault-ig2/400/400',
  'https://picsum.photos/seed/filmvault-ig3/400/400',
  'https://picsum.photos/seed/filmvault-ig4/400/400',
  'https://picsum.photos/seed/filmvault-ig5/400/400',
  'https://picsum.photos/seed/filmvault-ig6/400/400',
]

export function InstagramFeed() {
  return (
    <section className="bg-white py-0">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
        {photos.map((src, i) => (
          <div key={i} className="group relative overflow-hidden">
            <img
              src={src}
              alt={`Instagram photo ${i + 1}`}
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-navy-900/0 opacity-0 transition-all duration-300 group-hover:bg-navy-900/40 group-hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
