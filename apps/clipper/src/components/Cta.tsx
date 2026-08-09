import { ButtonLink } from '@free-react-templates/ui'

export function Cta() {
  return (
    <section className="relative overflow-hidden py-24">
      <img
        src="https://picsum.photos/seed/clipper-cta/1920/800"
        alt="Barber's hands at work"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          Appoint a Haircut Today and Get 25% discount
        </h2>
        <ButtonLink
          href="#contact"
          className="mt-8 bg-black hover:bg-gray-800 focus-visible:ring-black/40"
        >
          Make an Appointment
        </ButtonLink>
      </div>
    </section>
  )
}
