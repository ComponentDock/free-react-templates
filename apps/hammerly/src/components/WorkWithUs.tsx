import { Button } from '@free-react-templates/ui'

export function WorkWithUs() {
  return (
    <section className="bg-dark py-16 text-center md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-4 font-section text-3xl font-bold uppercase text-white md:text-4xl">
          Work With Us
        </h2>
        <p className="mb-8 text-light/70">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum fugiat nostrum
          provident officiis dolorum consequuntur facere ipsa.
        </p>
        <Button className="rounded bg-brand px-8 py-3 font-heading text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-brand-dark">
          Get a Quote
        </Button>
      </div>
    </section>
  )
}
