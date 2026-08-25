import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section className="bg-white py-24 text-center">
      <div className="mx-auto max-w-3xl px-5">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-secondary">
          Welcome To Our Site
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-heading md:text-5xl">
          We have the best solution for your business to grow.
        </h1>
        <p className="mb-8 text-lg text-body">
          Delivering innovative strategies and creative solutions that drive measurable results for
          ambitious brands across every industry.
        </p>
        <Button className="rounded-none bg-brand-primary px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-secondary">
          Get started
        </Button>
      </div>
    </section>
  )
}
