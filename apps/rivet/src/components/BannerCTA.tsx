import { ButtonLink } from '@free-react-templates/ui'

export function BannerCTA() {
  return (
    <section className="bg-paper py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row lg:px-8">
        <h2 className="text-2xl font-bold text-heading md:text-3xl">
          Trusted Construction &amp; Development Since 1889
        </h2>
        <ButtonLink href="#contact" variant="outline" className="shrink-0">
          Get A Quote
        </ButtonLink>
      </div>
    </section>
  )
}
