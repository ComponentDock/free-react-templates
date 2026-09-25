import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-[540px] items-center bg-gradient-to-t from-brand-blue to-brand-cyan">
      <div className="mx-auto w-full max-w-[1140px] px-4 pt-24 pb-16">
        <div className="max-w-[600px]">
          <h1 className="mb-4 text-[30px] font-semibold uppercase leading-tight text-white">
            Don&apos;t look anywhere, <br /> This is the best place on web
          </h1>
          <p className="mb-8 text-sm font-light leading-relaxed text-white/90">
            Living in today&apos;s metropolitan world of cellular phones, mobile computers and other
            high-tech gadgets is not just hectic but very exhausting. Our aim is to provide a
            solution that simplifies your digital experience.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[20px] border border-white px-6 py-2 text-sm font-medium text-white transition hover:border-transparent hover:bg-white/10"
          >
            Get Started
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
