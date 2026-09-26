const photos = [
  { id: 1, title: 'Baby album', category: 'Photography / Baby' },
  { id: 2, title: 'Portrait album', category: 'Photography / Portrait' },
  { id: 3, title: 'Nature album', category: 'Photography / Nature' },
  { id: 4, title: 'Baby album', category: 'Photography / Baby' },
  { id: 5, title: 'Portrait album', category: 'Photography / Portrait' },
  { id: 6, title: 'Nature album', category: 'Photography / Nature' },
  { id: 7, title: 'Baby album', category: 'Photography / Baby' },
  { id: 8, title: 'Portrait album', category: 'Photography / Portrait' },
  { id: 9, title: 'Nature album', category: 'Photography / Nature' },
]

export function Gallery() {
  return (
    <section id="albums" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-heading">My world class photography</h2>
          <p className="mx-auto max-w-xl text-base text-body">
            Whether you&apos;re about to create a website for the first time, or you&apos;re looking
            for a theme that provides advanced capabilities.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3">
          {photos.map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden">
              <img
                src={`https://picsum.photos/seed/captura-gallery-${photo.id}/500/500`}
                alt={photo.title}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-dark/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="text-center text-white">
                  <h3 className="mb-1 text-lg font-medium">{photo.title}</h3>
                  <span className="text-sm">{photo.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
