export function PortfolioPanel() {
  const items = [
    { seed: 'visage-port-1', title: 'Brand Identity' },
    { seed: 'visage-port-2', title: 'Web Application' },
    { seed: 'visage-port-3', title: 'Mobile App UI' },
    { seed: 'visage-port-4', title: 'E-commerce Site' },
    { seed: 'visage-port-5', title: 'Dashboard Design' },
    { seed: 'visage-port-6', title: 'Landing Page' },
  ]

  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold text-brand-dark">Portfolio</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.seed} className="group relative overflow-hidden rounded-lg">
            <img
              src={`https://picsum.photos/seed/${item.seed}/400/300`}
              alt={item.title}
              className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-brand-dark/0 opacity-0 transition-all duration-300 group-hover:bg-brand-dark/60 group-hover:opacity-100">
              <span className="text-sm font-bold text-white">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
