import { ArrowRight } from 'lucide-react'

export function StoryArea() {
  return (
    <section className="bg-gradient-to-t from-brand-blue to-brand-cyan py-20">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="flex items-center">
          <div className="hidden w-[8%] lg:block" />
          <div className="lg:w-[58%]">
            <h6 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              From the part of beginning
            </h6>
            <p className="mb-6 text-sm font-light leading-relaxed text-white/90">
              Usage of the Internet is becoming more common due to rapid advancement of technology
              and the power of globalization. Societies are becoming more inter-connected. Thoughts
              from different parts of the world are shared instantly.
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
      </div>
    </section>
  )
}
