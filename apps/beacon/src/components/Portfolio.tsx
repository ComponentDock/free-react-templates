const portfolioItems = [
  { id: 1, title: 'Summer in the desert', category: 'Landscape Photography', seed: 'beacon-p1' },
  { id: 2, title: 'Urban nightscape', category: 'Street Photography', seed: 'beacon-p2' },
  { id: 3, title: 'Ocean breeze', category: 'Nature Photography', seed: 'beacon-p3' },
  { id: 4, title: 'Golden hour', category: 'Portrait Photography', seed: 'beacon-p4' },
  { id: 5, title: 'Mountain peaks', category: 'Adventure Photography', seed: 'beacon-p5' },
  { id: 6, title: 'City reflections', category: 'Architecture Photography', seed: 'beacon-p6' },
  { id: 7, title: 'Forest trails', category: 'Wildlife Photography', seed: 'beacon-p7' },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-beacon-light-bg py-[130px]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, idx) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden ${
                idx === 3 || idx === 4 || idx === 6 ? 'lg:col-span-1' : ''
              } ${idx === 6 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <img
                src={`https://picsum.photos/seed/${item.seed}/600/400`}
                alt={item.title}
                className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-beacon-heading/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-center text-white">
                  <h5 className="mb-1 text-base font-semibold">{item.title}</h5>
                  <p className="text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
