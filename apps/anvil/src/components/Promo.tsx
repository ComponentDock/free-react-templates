import { ButtonLink } from '@free-react-templates/ui'

export function Promo() {
  return (
    <section className="bg-brand py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:flex-row">
        <h2 className="text-center font-display text-2xl font-extrabold uppercase text-white sm:text-3xl lg:text-left">
          Contact us for quotations
        </h2>
        <ButtonLink
          href="#contact"
          className="shrink-0 rounded-[5px] border-2 border-white bg-transparent px-8 font-sans text-sm font-semibold uppercase text-white transition-colors hover:bg-white hover:text-brand"
        >
          Get In Touch
        </ButtonLink>
      </div>
    </section>
  )
}
