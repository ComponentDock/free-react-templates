const portfolioItems = [
  {
    title: 'Summer in the Desert',
    category: 'Landscape Photography',
    seed: 'snaplens-p1',
    wide: false,
  },
  { title: 'City Lights', category: 'Urban Photography', seed: 'snaplens-p2', wide: false },
  { title: 'Ocean Waves', category: 'Seascape Photography', seed: 'snaplens-p3', wide: false },
  { title: 'Mountain Peaks', category: 'Nature Photography', seed: 'snaplens-p4', wide: true },
  { title: 'Golden Hour', category: 'Portrait Photography', seed: 'snaplens-p5', wide: true },
  { title: 'Forest Trail', category: 'Landscape Photography', seed: 'snaplens-p6', wide: false },
  { title: 'Night Skyline', category: 'Urban Photography', seed: 'snaplens-p7', wide: true },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-ink-700">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {portfolioItems.map((item) => (
          <a
            key={item.seed}
            href="#"
            className={`group relative block h-[400px] overflow-hidden md:h-[580px] ${
              item.wide ? 'md:col-span-2' : ''
            }`}
          >
            <img
              src={`https://picsum.photos/seed/${item.seed}/800/600`}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/50">
              <div className="translate-y-8 text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <h5 className="mb-1 text-lg font-semibold text-white">{item.title}</h5>
                <p className="text-sm text-white/70">{item.category}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
