const items = [
  { title: 'Corporate and Brand Identity', category: 'Brand Identity', seed: 'vibrance-port-1' },
  { title: 'Corporate and Brand Identity', category: 'Brand Identity', seed: 'vibrance-port-2' },
  { title: 'Corporate and Brand Identity', category: 'Brand Identity', seed: 'vibrance-port-3' },
  { title: 'Corporate and Brand Identity', category: 'Brand Identity', seed: 'vibrance-port-4' },
  { title: 'Corporate and Brand Identity', category: 'Brand Identity', seed: 'vibrance-port-5' },
  { title: 'Corporate and Brand Identity', category: 'Brand Identity', seed: 'vibrance-port-6' },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-mist py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <a key={item.seed} href="#" className="group relative block overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${item.seed}/600/400`}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-center">
                  <h5 className="text-lg font-bold text-white">{item.title}</h5>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/70">
                    {item.category}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
