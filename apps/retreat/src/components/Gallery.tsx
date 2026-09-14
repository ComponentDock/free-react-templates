const galleryItems = [
  {
    image: 'https://picsum.photos/seed/retreat-gallery1/600/400',
    category: 'Accommodation',
    title: 'Ocean View Suite',
  },
  {
    image: 'https://picsum.photos/seed/retreat-gallery2/600/400',
    category: 'Dining',
    title: 'Fine Dining Restaurant',
  },
  {
    image: 'https://picsum.photos/seed/retreat-gallery3/600/400',
    category: 'Wellness',
    title: 'Spa & Sauna',
  },
  {
    image: 'https://picsum.photos/seed/retreat-gallery4/600/400',
    category: 'Activities',
    title: 'Beach Activities',
  },
]

export function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-brand text-sm tracking-widest uppercase mb-2">Gallery</p>
          <h2 className="text-3xl font-bold text-body">Our Resort Views</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/70 transition-colors duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                <p className="text-brand text-sm">{item.category}</p>
                <p className="text-white font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
