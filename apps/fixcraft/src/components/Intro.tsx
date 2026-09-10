import { Wrench, Phone } from 'lucide-react'

export function Intro() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            We care about your car
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-ink dark:text-white sm:text-4xl">
            We are the best auto repair services
          </h2>
          <p className="mt-6 leading-relaxed text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Wrench className="h-7 w-7" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-ink dark:text-white">
                  45+ Years of Experience
                </h3>
                <p className="mt-1 text-sm text-mist dark:text-white/60">Satisfied customers</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 rounded bg-brand px-6 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> +01 (123) 456 7890
              </a>
            </div>
          </div>
        </div>
        <img
          src="https://picsum.photos/seed/fixcraft-3/720/540"
          alt="Fixcraft mechanic working on car"
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
          loading="lazy"
        />
      </div>
    </section>
  )
}
