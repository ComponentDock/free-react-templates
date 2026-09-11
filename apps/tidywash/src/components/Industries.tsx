const industries = [
  { name: 'Residential Cleaning', seed: 'tidywash-res' },
  { name: 'Commercial Cleaning', seed: 'tidywash-com' },
  { name: 'Construction Cleaning', seed: 'tidywash-con' },
  { name: 'Windows Cleaning', seed: 'tidywash-win' },
  { name: 'Carpet Cleaning', seed: 'tidywash-car' },
  { name: 'Furniture Cleaning', seed: 'tidywash-fur' },
] as const

export function Industries() {
  return (
    <section id="services" aria-label="Industries we serve" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary-400">
          Services
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-ink">Industries We Serve</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-smoke">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
          the Semantics, a large language ocean.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <a key={ind.name} href="#" className="group relative block overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${ind.seed}/600/400`}
                alt={ind.name}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-5">
                <div>
                  <h3 className="text-lg font-bold text-white">{ind.name}</h3>
                  <span className="text-xs text-gray-300">Starting from $29.00</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
