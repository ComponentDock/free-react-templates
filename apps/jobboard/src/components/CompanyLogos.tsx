const companies = [
  { name: 'Spotify', seed: 'company-1' },
  { name: 'Google', seed: 'company-2' },
  { name: 'Stripe', seed: 'company-3' },
  { name: 'Adobe', seed: 'company-4' },
  { name: 'Meta', seed: 'company-5' },
  { name: 'Apple', seed: 'company-6' },
]

export function CompanyLogos() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-10">Company We&apos;ve Helped</h2>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {companies.map((c) => (
            <img
              key={c.seed}
              src={`https://picsum.photos/seed/${c.seed}/120/50`}
              alt={`${c.name} logo`}
              className="h-10 md:h-12 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
