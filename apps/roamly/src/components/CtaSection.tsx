import { ButtonLink } from '@free-react-templates/ui'

export function CtaSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      <img
        src="https://picsum.photos/seed/roamly-cta/1920/600"
        alt="Beach at golden hour"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-950/70" aria-hidden="true" />
      <div
        className="absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready for Your Next Adventure?
        </h2>
        <p className="mt-4 text-lg text-gray-200">
          Join thousands of travelers who have discovered the world with Roamly. Your journey of a
          lifetime starts here.
        </p>
        <ButtonLink
          href="mailto:hello@roamly.example"
          className="mt-8 h-auto rounded-lg bg-white px-8 py-4 text-base font-medium text-primary-700 shadow-lg hover:bg-gray-100 hover:shadow-xl"
        >
          Contact Us
        </ButtonLink>
      </div>
    </section>
  )
}
