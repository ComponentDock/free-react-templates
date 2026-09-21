import { Button } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section className="bg-brand py-16">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          What are you waiting for?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Book your first session today and begin your journey to better health.
        </p>
        <Button className="mt-8 rounded-lg bg-white px-8 py-3 text-brand hover:bg-gray-100">
          Contact us now
        </Button>
      </div>
    </section>
  )
}
