import { ButtonLink } from '@free-react-templates/ui'

export function AboutOne() {
  return (
    <section id="about-1" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/appru-about-1/600/800"
          alt="Appru phone in hand"
          className="mx-auto w-full max-w-sm rounded-3xl shadow-xl"
        />
        <div>
          <h2 className="font-display text-3xl font-bold leading-snug text-ink dark:text-white sm:text-4xl">
            We Believe that Interior beautifies the Total Architecture
          </h2>
          <p className="mt-6 leading-relaxed text-muted dark:text-gray-400">
            Great apps are built on great foundations. We shape every screen, flow, and detail so
            the inside of your product is as beautiful as the outside — and your users feel the
            difference from the first tap.
          </p>
          <ButtonLink
            href="#pricing"
            className="mt-8 rounded-none bg-gradient-to-r from-azure to-primary-600 px-12 py-4 text-sm font-medium uppercase tracking-wide text-white hover:from-primary-600 hover:to-azure"
          >
            Get Details
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
