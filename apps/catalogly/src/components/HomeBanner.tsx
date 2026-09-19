import { ButtonLink } from '@free-react-templates/ui'

export function HomeBanner() {
  return (
    <section className="bg-bg-light">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-heading">
            Georgia Helmet Collections!
          </h1>
          <p className="mb-8 text-base text-ink">
            Discover our premium selection of Georgia helmets, designed for safety and style. Shop
            the latest collections with fast shipping and excellent customer support.
          </p>
          <ButtonLink
            href="#"
            className="inline-block rounded-md bg-white px-8 py-3 text-sm font-semibold text-heading shadow transition-colors hover:bg-brand hover:text-white"
          >
            View Collection
          </ButtonLink>
        </div>
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/catalogly-hero/500/400"
            alt="Featured helmet product"
            className="max-w-full rounded object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
