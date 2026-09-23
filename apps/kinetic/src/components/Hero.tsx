import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[540px] items-center bg-gradient-to-r from-primary-400 to-teal-400"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-xl">
          <h1 className="mb-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Don&apos;t look anywhere, <br />
            This is the best place on web
          </h1>
          <p className="mb-8 text-base font-light leading-relaxed text-white/90">
            Living in today&apos;s metropolitan world of cellular phones, mobile computers and other
            high-tech gadgets is not just hectic but very demanding.
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-white bg-transparent px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <span>Get Started</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
