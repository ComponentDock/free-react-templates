import { ArrowRight } from 'lucide-react'

export function Story() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-start/10 to-brand-end/10" />
      <div className="absolute inset-0 z-0 bg-[url('https://picsum.photos/seed/glissade-story-bg/1600/600')] bg-cover bg-center opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center">
          <div className="ml-0 max-w-xl bg-white/90 p-10 shadow-sm md:ml-16 md:p-14">
            <h6 className="text-xs font-semibold uppercase tracking-widest text-brand-start">
              From the part of beginning
            </h6>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              Usage of the Internet is becoming more common due to rapid advancement of technology
              and the power of globalization. Societies are becoming more inter-connected. Thoughts
              from different cultures and people shape our understanding of the world.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-start px-7 py-2.5 text-sm font-medium text-brand-start transition-all hover:border-transparent hover:bg-gradient-to-b hover:from-brand-start hover:to-brand-end hover:text-white"
            >
              Get Started
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
