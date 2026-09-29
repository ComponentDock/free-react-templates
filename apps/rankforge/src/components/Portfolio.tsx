const portfolioItems = [
  { domain: 'rankforge.com', category: 'SEO', seed: 'rankforge-port-1' },
  { domain: 'searchmaster.io', category: 'Marketing', seed: 'rankforge-port-2' },
  { domain: 'contentpro.net', category: 'Content', seed: 'rankforge-port-3' },
  { domain: 'linkbuild.org', category: 'Link Building', seed: 'rankforge-port-4' },
] as const

export function Portfolio() {
  return (
    <section aria-label="Portfolio" className="bg-mist py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold text-primary-700 dark:text-gray-100">
            Visit Some Of Our Awesome Stuffs
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {portfolioItems.map((item) => (
            <div key={item.domain} className="group relative overflow-hidden rounded-md shadow-sm">
              <img
                src={`https://picsum.photos/seed/${item.seed}/400/300`}
                alt={`${item.domain} portfolio item`}
                className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="font-display text-lg font-semibold text-white">{item.domain}</span>
                <span className="mt-1 text-sm text-white/70">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
