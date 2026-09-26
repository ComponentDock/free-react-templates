import { ButtonLink } from '@free-react-templates/ui'

export function HireMe() {
  return (
    <section className="bg-brand py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          I&apos;m <span className="underline decoration-white/40">Available</span> For Freelancing
        </h2>
        <ButtonLink
          href="#contact"
          className="inline-flex rounded-full border-2 border-white bg-white px-8 py-3 text-sm font-semibold text-brand transition-colors hover:bg-transparent hover:text-white"
        >
          Hire me
        </ButtonLink>
      </div>
    </section>
  )
}
