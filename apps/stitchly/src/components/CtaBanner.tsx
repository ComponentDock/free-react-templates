import { ButtonLink } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section className="bg-brand py-16 dark:bg-brand-dark">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Book Your Appointment
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Visit our studio for a personalized fitting experience. Our expert tailors are ready to
          bring your vision to life.
        </p>
        <ButtonLink
          href="#contact"
          className="mt-8 inline-flex rounded-none bg-white px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-ink hover:bg-gray-100"
        >
          Schedule Now
        </ButtonLink>
      </div>
    </section>
  )
}
