const PARTNERS = ['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5']

export function Partners() {
  return (
    <section className="py-16 bg-[var(--color-bg-gray)] font-[family-name:var(--font-montserrat)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold uppercase text-[var(--color-heading)] relative inline-block pb-3 before:absolute before:top-0 before:left-0 before:w-8 before:border-t-3 before:border-[var(--color-brand)]">
            Our Partners
          </h3>
        </div>
        <div className="flex justify-center items-center gap-12 flex-wrap opacity-40">
          {PARTNERS.map((partner, i) => (
            <img
              key={partner}
              src={`https://picsum.photos/seed/partner-${i + 1}/130/50`}
              alt={partner}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 hover:opacity-100 transition-all"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
