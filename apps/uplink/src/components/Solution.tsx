import { ButtonLink } from '@free-react-templates/ui'

/** Orange band inviting custom hosting packages. */
export function Solution() {
  return (
    <section className="bg-accent-500 py-24 text-center">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h2 className="text-3xl font-medium text-white sm:text-4xl">
          Looking for a Custom Solution?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white opacity-60">
          Our engineers design tailor-made hosting packages for enterprises, agencies, and
          high-traffic platforms — architecture review included.
        </p>
        <ButtonLink
          href="#contact"
          className="mt-10 rounded-[5px] bg-white px-10 text-ink-900 hover:bg-white hover:text-primary-500"
        >
          Request Free Consultation
        </ButtonLink>
      </div>
    </section>
  )
}
