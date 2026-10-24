import { ButtonLink } from '@free-react-templates/ui'

export function ServicesBanner() {
  return (
    <section className="bg-brand py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold leading-snug text-white sm:text-4xl">
            Hello City We are leader in Services.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/85">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum pendisse ultrices gravida.
          </p>
        </div>
        <ButtonLink
          href="#services"
          className="shrink-0 rounded-md bg-white px-10 py-4 text-base font-bold uppercase text-brand hover:bg-ink hover:text-white"
        >
          Learn more
        </ButtonLink>
      </div>
    </section>
  )
}
