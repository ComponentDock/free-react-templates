const galleryItems = [
  { title: 'Bonzai Tree', category: 'Web Application', seed: 'makely-gal1' },
  { title: 'Simple Woman', category: 'Branding', seed: 'makely-gal2' },
  { title: 'Fruits', category: 'Website', seed: 'makely-gal3' },
  { title: 'Design Material', category: 'Web Application', seed: 'makely-gal4' },
  { title: 'Handy Food', category: 'Branding', seed: 'makely-gal5' },
  { title: 'Cat With Cup', category: 'Website', seed: 'makely-gal6' },
]

export function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.title} className="relative group overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${item.seed}/600/400`}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
