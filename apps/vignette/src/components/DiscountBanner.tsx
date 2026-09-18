export function DiscountBanner() {
  const offers = [
    { text: 'Free Shipping & Returns', action: 'BUY NOW' },
    { text: '20% Discount for all dresses', code: 'USE CODE: Vignette' },
    { text: '20% Discount for students', code: 'USE CODE: Vignette' },
  ]

  return (
    <section
      aria-label="Promotional offers"
      className="flex flex-col border-b border-divider bg-brand/5 md:flex-row"
    >
      {offers.map((offer, i) => (
        <div
          key={i}
          className={`flex flex-1 items-center justify-center px-6 py-4 text-center ${
            i < offers.length - 1 ? 'border-b border-divider md:border-b-0 md:border-r' : ''
          }`}
        >
          <div>
            <h5 className="text-sm font-semibold text-ink">{offer.text}</h5>
            {offer.action ? (
              <a
                href="#shop"
                className="mt-1 inline-block text-xs font-bold uppercase tracking-wider text-brand transition-colors hover:text-brand-dark"
              >
                {offer.action}
              </a>
            ) : (
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-mist">
                {offer.code}
              </p>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}
