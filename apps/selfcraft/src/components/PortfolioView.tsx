const PROJECTS = [
  { title: 'Brand Identity', subtitle: 'Visual Design', seed: 'selfcraft-proj-1' },
  { title: 'Web Application', subtitle: 'Full Stack Dev', seed: 'selfcraft-proj-2' },
  { title: 'Mobile App', subtitle: 'UI/UX Design', seed: 'selfcraft-proj-3' },
  { title: 'E-Commerce Site', subtitle: 'Shopify Theme', seed: 'selfcraft-proj-4' },
  { title: 'Marketing Campaign', subtitle: 'Digital Strategy', seed: 'selfcraft-proj-5' },
  { title: 'Photography', subtitle: 'Creative Direction', seed: 'selfcraft-proj-6' },
]

export function PortfolioView() {
  return (
    <section aria-label="Portfolio">
      <h1 className="font-heading text-heading text-4xl sm:text-5xl mb-8">Portfolio</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PROJECTS.map(({ title, subtitle, seed }) => (
          <div key={title} className="group relative overflow-hidden border border-gray-200 p-2.5">
            <img
              src={`https://picsum.photos/seed/${seed}/600/400`}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 top-[calc(100%-80px)] bg-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1">
              <h3 className="text-white text-xl font-heading">{title}</h3>
              <span className="text-white text-sm opacity-80">{subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
