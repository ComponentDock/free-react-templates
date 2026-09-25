import { ButtonLink } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Have a project on your mind.
        </h2>
        <p className="mb-8 text-gray-400">Let's work together to bring your ideas to life.</p>
        <ButtonLink
          href="#contact"
          className="inline-block rounded bg-brand-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Contact me
        </ButtonLink>
      </div>
    </section>
  )
}
