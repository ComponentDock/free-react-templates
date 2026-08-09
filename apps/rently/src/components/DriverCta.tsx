import { Button } from '@free-react-templates/ui'

export function DriverCta() {
  return (
    <section id="earn" className="bg-gradient-to-r from-brand to-brand-dark py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 text-center sm:px-6 lg:flex-row lg:text-left">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-white/80">
            Earn with Rently
          </span>
          <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
            Do You Want To Earn With Us? So Don't Be Late.
          </h2>
        </div>
        <Button
          size="lg"
          className="shrink-0 border border-white/40 bg-white text-brand hover:bg-white/90"
        >
          Become A Driver
        </Button>
      </div>
    </section>
  )
}
