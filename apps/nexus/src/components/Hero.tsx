const PRIMARY_PILLS = ['Technology', 'Marketing', 'Product & Design']
const SECONDARY_PILLS = ['Strategic Consulting', 'Business Synergies', 'Fundraising']

export function Hero() {
  return (
    <section id="home" className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h1 className="mb-8 text-4xl font-bold leading-tight text-text md:text-6xl lg:text-7xl">
          We are web agency based in Los Angeles, CA
        </h1>
        <div className="mb-4 flex flex-wrap justify-center gap-3">
          {PRIMARY_PILLS.map((pill) => (
            <span
              key={pill}
              className="rounded-full bg-brand-pink px-5 py-2 text-xs font-bold uppercase tracking-wider text-white"
            >
              {pill}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {SECONDARY_PILLS.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-gray-300 px-5 py-2 text-xs font-bold uppercase tracking-wider text-text"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
