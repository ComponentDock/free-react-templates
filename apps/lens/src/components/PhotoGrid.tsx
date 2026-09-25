const photos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/lens-photo-${i + 1}/600/300`,
  alt: `Photography ${i + 1}`,
}))

export function PhotoGrid() {
  return (
    <section id="photos" className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <a
            key={photo.id}
            href={photo.src}
            className="group relative block overflow-hidden"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
