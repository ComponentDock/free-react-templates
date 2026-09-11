import { Button } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section className="bg-brand py-16 text-center lg:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="font-display text-3xl font-bold text-white lg:text-4xl">
          Start Investing in Cryptocurrency Today
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Join thousands of investors who trust Coincast for their digital asset management. Get
          started with a free consultation.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="mt-8 border-white text-white hover:bg-white hover:text-brand"
        >
          Join Now
        </Button>
      </div>
    </section>
  )
}
