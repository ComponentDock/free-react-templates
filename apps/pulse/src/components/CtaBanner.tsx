import { Button } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section className="bg-gradient-to-br from-pulse-400 to-accent-400 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
          Prepare For Takeoff
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Looking for business opportunity?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Let's collaborate and take your business to the next level. Get in touch with us today.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="mt-8 rounded-full border-white bg-white text-pulse-700 hover:bg-white/90"
        >
          Get Started
        </Button>
      </div>
    </section>
  )
}
