import { ButtonLink } from '@free-react-templates/ui'

const deals = [
  { image: 'https://picsum.photos/seed/catalogly-deal1/600/400', alt: 'Hot deal on helmets' },
  { image: 'https://picsum.photos/seed/catalogly-deal2/600/400', alt: 'Hot deal on accessories' },
]

export function HotDeals() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 md:grid-cols-2">
          {deals.map((deal) => (
            <div key={deal.alt} className="group relative overflow-hidden rounded">
              <img
                src={deal.image}
                alt={deal.alt}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white transition-opacity">
                <h3 className="mb-3 text-xl font-bold">Hot Deals of this Month</h3>
                <ButtonLink
                  href="#"
                  className="rounded bg-white px-6 py-2 text-sm font-semibold text-heading transition-colors hover:bg-brand hover:text-white"
                >
                  Shop Now
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
