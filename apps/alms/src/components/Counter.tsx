import { ButtonLink } from '@free-react-templates/ui'

export function Counter() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <div className="bg-brand p-10 text-ink">
          <p className="text-2xl font-light">Served Over</p>
          <p className="font-heading text-6xl font-light leading-none">1,321,901</p>
          <p className="mb-6 mt-2 text-2xl font-light">Children in 150 Countries</p>
          <ButtonLink
            href="#fundraisers"
            className="rounded-none border-2 border-transparent bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] hover:bg-ink hover:text-white"
          >
            View Our Program
          </ButtonLink>
        </div>

        <div>
          <h2 className="font-heading text-4xl font-light md:text-5xl">Who Are We?</h2>
          <p className="mt-5 text-lg leading-8 text-body">
            We are a small team of organisers, teachers and medics working with
            communities across 150 countries. Every program starts with a local
            request, not a fundraising target.
          </p>
          <p className="mt-4 text-body">
            A monthly gift funds the work that never makes the news: water
            filters, school desks, and the case workers who keep families
            together.
          </p>
          <ButtonLink
            href="#stories"
            className="mt-8 rounded-none border-2 border-brand bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-transparent hover:text-brand"
          >
            Learn More
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
