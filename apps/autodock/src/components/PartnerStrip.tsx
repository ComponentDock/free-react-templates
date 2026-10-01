const PARTNERS = [1, 2, 3, 4, 5, 6]

export function PartnerStrip() {
  return (
    <section aria-label="Trusted partners" className="border-y border-line bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-4">
        {PARTNERS.map((n) => (
          <img
            key={n}
            src={`https://picsum.photos/seed/autodock-partner-${n}/160/60`}
            alt={`Partner brand ${n}`}
            className="h-10 w-auto opacity-60 grayscale"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}
