import { cn } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section className="bg-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
              Get Started
            </p>
            <h2 className="text-3xl font-extrabold text-white">
              Fill in the brief and get the project estimate
            </h2>
            <p className="mt-4 max-w-lg text-white/70">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>
          <a
            href="#contact"
            className={cn(
              'inline-block rounded-full bg-brand px-8 py-3 text-sm font-bold text-white',
              'transition-colors hover:bg-brand-dark',
            )}
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
