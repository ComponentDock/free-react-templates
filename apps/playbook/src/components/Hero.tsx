import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-[700px] items-center justify-center bg-white px-6 md:min-h-[90vh]">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-[40px] font-bold leading-tight text-ink md:text-[70px]">
          We are Playbook. A digitally minded creative agency based in NYC.
        </h1>
      </div>

      <a
        href="#work"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink transition-colors hover:text-brand"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
