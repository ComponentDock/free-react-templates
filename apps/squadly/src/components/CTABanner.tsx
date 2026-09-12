import { ButtonLink } from '@free-react-templates/ui'

export function CTABanner() {
  return (
    <section
      className="relative flex items-center justify-center py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/squadly-cta/1600/600)' }}
    >
      <div className="absolute inset-0 bg-primary-700/80" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          We Are Squadly A Heavy Equipment Renting Company
        </h2>
        <p className="mb-8 text-lg text-gray-200">
          We can manage your dream building. A small river named Duden flows by their place.
        </p>
        <ButtonLink
          href="#contact"
          className="rounded bg-primary-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-600"
        >
          Make An Appointment
        </ButtonLink>
      </div>
    </section>
  )
}
