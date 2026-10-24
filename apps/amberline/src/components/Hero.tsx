import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const heroImage = 'https://picsum.photos/seed/amberline-hero/1920/1200'

const primary =
  'h-[53px] gap-3 rounded-none border border-transparent bg-brand px-6 text-[12px] font-bold uppercase tracking-[1px] text-ink hover:border-brand hover:bg-transparent hover:text-brand'
const darken =
  'h-[53px] gap-3 rounded-none border border-transparent bg-ink px-6 text-[12px] font-bold uppercase tracking-[1px] text-white hover:border-ink hover:bg-transparent hover:text-ink'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex h-screen min-h-[560px] items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-ink/60" />
      <div className="relative mx-auto w-full max-w-[1140px] px-4 text-center">
        <p className="mb-4 flex items-center justify-center gap-3">
          <span aria-hidden="true" className="h-px w-8 bg-white/70" />
          <span className="text-[16px] font-bold uppercase tracking-[2px] text-white/90">
            Since 1982
          </span>
          <span aria-hidden="true" className="h-px w-8 bg-white/70" />
        </p>
        <h1 className="text-[40px] font-bold leading-[1.15] uppercase tracking-[3px] text-white sm:text-[45px] lg:text-[60px]">
          We will be <span className="text-brand">happy</span> to take care of your work
        </h1>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href="#contact" className={primary}>
            Contact us
            <ArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
          <ButtonLink href="#contact" className={darken}>
            Request a quote
            <ArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
