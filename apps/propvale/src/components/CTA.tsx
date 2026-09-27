import { ButtonLink } from '@free-react-templates/ui'

export function CTA() {
  return (
    <section
      aria-label="Call to action"
      className="bg-gradient-to-r from-primary-400 to-primary-600 py-20"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-white">
          Add your property for sale
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/80">
          Reach thousands of potential buyers by listing your property on Propvale. Our platform
          connects you with serious buyers looking for their next home.
        </p>
        <div className="mt-10">
          <ButtonLink
            href="#contact"
            className="rounded-full bg-white px-9 py-3.5 font-semibold text-primary-600 transition-opacity hover:opacity-90"
          >
            List Your Property
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
