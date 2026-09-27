const projects = [
  {
    id: 1,
    title: '2D Vinyl Design',
    label: 'Client Project',
    seed: 'craftfolio-work1',
    span: 'col-span-2',
  },
  {
    id: 2,
    title: 'Brand Identity',
    label: 'Client Project',
    seed: 'craftfolio-work2',
    span: 'col-span-1',
  },
  {
    id: 3,
    title: 'UI Mockup',
    label: 'Client Project',
    seed: 'craftfolio-work3',
    span: 'col-span-1',
  },
  {
    id: 4,
    title: 'Web Redesign',
    label: 'Client Project',
    seed: 'craftfolio-work4',
    span: 'col-span-2',
  },
  {
    id: 5,
    title: 'Marketing Kit',
    label: 'Client Project',
    seed: 'craftfolio-work5',
    span: 'col-span-2',
  },
  {
    id: 6,
    title: 'App Concept',
    label: 'Client Project',
    seed: 'craftfolio-work6',
    span: 'col-span-1',
  },
  {
    id: 7,
    title: 'Social Campaign',
    label: 'Client Project',
    seed: 'craftfolio-work7',
    span: 'col-span-1',
  },
  {
    id: 8,
    title: 'Package Design',
    label: 'Client Project',
    seed: 'craftfolio-work8',
    span: 'col-span-1',
  },
]

const filters = ['All Categories', 'Branding', 'Creative Work', 'Web Design']

export default function Portfolio() {
  return (
    <section id="work" className="py-30 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-text-primary mb-4">Latest Works</h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            If you are looking at blank cassettes on the web, you may be very confused at the
            difference in price.
          </p>
        </div>
        {/* Filters */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {filters.map((f, i) => (
            <button
              key={f}
              className={`font-body text-sm px-4 py-2 rounded transition-colors ${
                i === 0
                  ? 'bg-brand text-white'
                  : 'bg-transparent text-text-secondary hover:text-brand'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((p) => (
            <div key={p.id} className={`relative group overflow-hidden rounded-lg ${p.span}`}>
              <img
                src={`https://picsum.photos/seed/${p.seed}/600/400`}
                alt={p.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <h4 className="font-heading text-lg font-bold mb-1">{p.title}</h4>
                <p className="font-body text-sm text-white/70">{p.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
