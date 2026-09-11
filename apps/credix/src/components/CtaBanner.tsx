import { ButtonLink } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section id="cta" className="bg-gray-100 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <h4 className="font-heading text-lg font-bold text-gray-900">
          Are you in need for a loan? Get in touch with us.
        </h4>
        <ButtonLink
          href="#contact"
          className="shrink-0 rounded bg-gold-400 px-8 py-3 text-sm font-bold text-navy-700 shadow-lg transition hover:bg-gold-500"
        >
          Read More
        </ButtonLink>
      </div>
    </section>
  )
}
