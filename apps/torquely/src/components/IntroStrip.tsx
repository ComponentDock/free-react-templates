import { Wrench } from 'lucide-react'

export function IntroStrip() {
  return (
    <section aria-label="Ready to repair" className="bg-accent text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row">
        <div className="flex items-center gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/15">
            <Wrench className="h-8 w-8" aria-hidden="true" />
          </div>
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
            Are you ready? <span className="font-semibold text-white/80">Let's repair it now!</span>
          </h2>
        </div>
        <a
          href="#appointment"
          className="shrink-0 rounded bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-accent transition-colors hover:bg-brand hover:text-white"
        >
          Book an Appointment
        </a>
      </div>
    </section>
  )
}
