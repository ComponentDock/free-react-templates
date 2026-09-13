import { ButtonLink } from '@free-react-templates/ui'

export function CallToAction() {
  return (
    <section aria-label="Support the show" className="bg-mist py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-extrabold text-ink">Support The Show</h2>
        <p className="mt-4 text-base text-smoke">
          Enjoy listening to our podcast? Consider making a donation!
        </p>
        <ButtonLink
          href="#"
          className="mt-8 inline-block rounded-md bg-primary-400 px-10 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-500"
        >
          Make a Donation
        </ButtonLink>
      </div>
    </section>
  )
}
