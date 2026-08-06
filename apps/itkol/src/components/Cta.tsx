import { ButtonLink } from '@free-react-templates/ui'

export function Cta() {
  return (
    <section aria-label="Call to action" className="bg-primary-500 py-16 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Innovative IT Solution for your Business & Startup
        </h2>
        <ButtonLink
          href="#contact"
          className="shrink-0 rounded-full bg-white px-10 py-3.5 text-primary-500 hover:bg-gray-100"
        >
          Get Started Now
        </ButtonLink>
      </div>
    </section>
  )
}
