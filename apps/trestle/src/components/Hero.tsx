import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="bg-paper dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-block bg-brand px-3 py-1 text-xs font-black uppercase tracking-widest text-ink">
            Architecture Studio
          </span>
          <h1 className="mt-5 text-4xl font-black leading-tight text-ink sm:text-5xl dark:text-white">
            Minimalistic Architecture <span className="text-brand">and more</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-mist dark:text-gray-300">
            We design clean, functional spaces that speak for themselves — from private homes to
            landmark towers.
          </p>
          <div className="mt-8">
            <ButtonLink
              href="#projects"
              className="border-4 border-ink bg-brand px-10 py-4 text-sm font-black uppercase tracking-wide text-ink hover:bg-transparent"
            >
              See Project
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://picsum.photos/seed/trestle-hero/640/720"
            alt="Minimal concrete architecture with warm light"
            className="h-[420px] w-full object-cover sm:h-[520px]"
          />
          <div className="absolute -bottom-6 -left-6 hidden bg-brand px-6 py-4 text-ink sm:block">
            <span className="block text-3xl font-black">15+</span>
            <span className="text-xs font-bold uppercase tracking-wider">Years of craft</span>
          </div>
        </div>
      </div>
    </section>
  )
}
