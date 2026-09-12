import { ArrowRight } from 'lucide-react'

export function Cta() {
  return (
    <section className="relative bg-ink bg-cover bg-center py-32">
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-ink/20" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="mb-6 text-3xl font-normal leading-tight text-white md:text-[44px] md:leading-[56px]">
            Let&apos;s talk about your <br className="hidden md:block" /> industrial problems
          </h2>
          <p className="mb-8 max-w-lg text-base font-normal leading-relaxed text-gray-300">
            Our team of experienced engineers and consultants is ready to tackle your most
            challenging industrial problems with innovative, cost-effective solutions.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-ink px-10 py-5 text-base font-normal text-white ring-1 ring-gray-600 transition-all hover:bg-brand hover:ring-brand"
          >
            Discuss now
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
