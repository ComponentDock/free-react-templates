import { ButtonLink } from '@free-react-templates/ui'

export function AppointmentBand() {
  return (
    <section
      id="appointment"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/fixly-band/1920/600')" }}
    >
      <div className="absolute inset-0 bg-brand/80" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 py-16 text-center sm:px-6 lg:flex-row lg:text-left">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-white/80">
            Book your visit
          </span>
          <h2 className="mt-2 font-display text-2xl font-black text-white sm:text-3xl">
            Schedule Your Appointment Today!
          </h2>
        </div>
        <ButtonLink
          href="#contact"
          className="h-12 shrink-0 bg-white px-6 text-base text-brand hover:bg-white/90"
        >
          Make An Appointment
        </ButtonLink>
      </div>
    </section>
  )
}
