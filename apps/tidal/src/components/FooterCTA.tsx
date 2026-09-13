import { ButtonLink } from '@free-react-templates/ui'

export function FooterCTA() {
  return (
    <section aria-label="Call to action" className="bg-brand py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white">We Are Tidal, A Travel Agency</h2>
        <p className="mt-6 text-lg text-white/90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="#destination"
            className="rounded bg-white px-8 py-3 font-semibold text-brand transition-colors hover:bg-gray-100"
          >
            Explore Now
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
