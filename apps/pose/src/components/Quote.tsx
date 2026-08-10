import { ButtonLink } from '@free-react-templates/ui'

export function Quote() {
  return (
    <section id="quote" className="bg-dark py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-4xl font-bold text-white">Request a Quote</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400">
            Become A Model? Call us now to know how! Far far away, behind the word mountains, far
            from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="flex flex-col items-start gap-6 lg:items-end">
          <div className="text-left lg:text-right">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
              Model Courses
            </p>
            <p className="mt-2 text-gray-300">Know more about our training programs.</p>
          </div>
          <ButtonLink
            href="#appointment"
            className="rounded-full bg-brand px-10 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-transparent hover:text-brand"
          >
            Know more
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
