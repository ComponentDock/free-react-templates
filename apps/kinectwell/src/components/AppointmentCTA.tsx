import { appointmentBlurb, appointmentBtnLabel, appointmentTitle } from '../data'

export function AppointmentCTA() {
  return (
    <section id="appointment" className="bg-brand py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{appointmentTitle}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">{appointmentBlurb}</p>
        <a
          href="#contact"
          className="mt-8 inline-flex h-[50px] items-center rounded-full bg-white px-9 text-sm font-medium text-brand transition-colors hover:bg-gray-100"
        >
          {appointmentBtnLabel}
        </a>
      </div>
    </section>
  )
}
