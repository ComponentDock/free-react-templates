import { Search } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary-400 to-accent-500"
    >
      <div className="relative mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-5xl font-bold leading-tight tracking-wide text-white sm:text-6xl">
          Design. Development. Hosting.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
          the Semantics.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="#pricing"
            className="rounded-full bg-white px-9 py-3.5 font-semibold text-primary-700 shadow-lg transition-colors hover:bg-gray-100"
          >
            Get started
          </ButtonLink>
          <ButtonLink
            href="#domain"
            className="rounded-full border-2 border-white/80 px-9 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Search className="mr-2 h-4 w-4" aria-hidden="true" />
            Get domain
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
