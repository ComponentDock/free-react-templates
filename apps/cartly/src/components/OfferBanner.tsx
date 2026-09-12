import { Button } from '@free-react-templates/ui'

export function OfferBanner() {
  return (
    <section className="relative overflow-hidden bg-lime-50">
      <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
        <p className="font-heading text-lg font-light uppercase tracking-wide text-neutral-600">
          All Men's Collection
        </p>
        <h2 className="mt-4 font-heading text-6xl font-bold uppercase text-neutral-800 sm:text-7xl">
          50% Off
        </h2>
        <Button
          variant="primary"
          className="mt-8 bg-lime-400 text-white uppercase tracking-wider hover:bg-lime-500 border-none"
        >
          Discover Now
        </Button>
        <p className="mt-4 text-sm text-neutral-500">Limited Time Offer</p>
      </div>
    </section>
  )
}
