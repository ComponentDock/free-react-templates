import { ButtonLink } from '@free-react-templates/ui'

export function Cta() {
  return (
    <section
      id="book"
      className="bg-gradient-to-r from-primary-600 to-primary-400 py-20 dark:from-primary-800 dark:to-primary-600"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready to Pamper Your Pet?
        </h2>
        <p className="mt-4 text-lg text-primary-50">
          Book an appointment today and give your furry friend the royal treatment they deserve.
        </p>
        <ButtonLink
          href="#contact"
          className="mt-8 rounded-full bg-white px-8 py-4 text-primary-700 hover:bg-primary-50"
        >
          Book an Appointment
        </ButtonLink>
      </div>
    </section>
  )
}
