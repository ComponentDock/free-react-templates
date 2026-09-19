import { ButtonLink } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section className="bg-brand">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6">
        <div className="text-white">
          <h4 className="text-xl font-semibold">
            Schedule your appointment for a free consultation.
          </h4>
          <p className="mt-1 text-sm text-white/80">
            Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
          </p>
        </div>
        <ButtonLink
          href="#contact"
          className="shrink-0 rounded border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-brand"
        >
          Learn More
        </ButtonLink>
      </div>
    </section>
  )
}
