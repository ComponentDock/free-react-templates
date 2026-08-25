const PARTNERS = [
  { name: 'Partner 1', seed: 'scholara-p1' },
  { name: 'Partner 2', seed: 'scholara-p2' },
  { name: 'Partner 3', seed: 'scholara-p3' },
  { name: 'Partner 4', seed: 'scholara-p4' },
  { name: 'Partner 5', seed: 'scholara-p5' },
  { name: 'Partner 6', seed: 'scholara-p6' },
]

export function Partners() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-black uppercase text-ink md:text-4xl">Our Partners</h2>
          <p className="mx-auto max-w-2xl text-mist">
            We collaborate with leading organizations to bring you the best educational
            opportunities.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex h-16 w-32 items-center justify-center grayscale opacity-50 transition-all hover:grayscale-0 hover:opacity-100"
            >
              <img
                src={`https://picsum.photos/seed/${partner.seed}/200/80`}
                alt={partner.name}
                className="max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
