import { Button } from '@free-react-templates/ui'

export function CTACover() {
  return (
    <section id="cta" aria-label="Call to action" className="relative py-24">
      <img
        src="https://picsum.photos/seed/learnova-cta/1920/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">
          Sign Up And Get a 7-day Free Trial
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Start your learning journey today. No credit card required.
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            className="rounded bg-primary-blue px-8 py-3 text-base font-bold text-white hover:bg-blue-600 transition-colors"
          >
            Sign Up Now
          </Button>
        </div>
      </div>
    </section>
  )
}
