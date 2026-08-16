import { ButtonLink } from '@free-react-templates/ui'
import { join } from '../data'

export function JoinCta() {
  return (
    <section className="bg-deep py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 text-center md:flex-row md:justify-between md:text-left">
        <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">{join.heading}</h2>
        <ButtonLink
          href="#contact"
          className="rounded-[30px] border-2 border-transparent bg-brand px-8 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-white hover:border-transparent hover:bg-white hover:text-brand hover:shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]"
        >
          {join.ctaLabel}
        </ButtonLink>
      </div>
    </section>
  )
}
