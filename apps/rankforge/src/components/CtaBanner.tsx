import { ButtonLink } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section
      aria-label="Call to action"
      className="bg-gradient-to-r from-accent-400 to-secondary-500 py-20"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-white">Have project in mind?</h2>
        <p className="mt-6 leading-relaxed text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo.
        </p>
        <div className="mt-10">
          <ButtonLink
            href="#contact"
            className="rounded-md border border-white bg-white px-9 py-3.5 font-semibold text-accent-400 transition-colors hover:bg-gray-100"
          >
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
