import { ChevronRight } from 'lucide-react'

export function About() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <img
            src="https://picsum.photos/seed/vibrance-about/500/500"
            alt="About Vibrance"
            className="w-full"
          />
        </div>

        <div>
          <h3 className="text-3xl font-bold leading-snug text-ink md:text-4xl">
            Brand experts with +10y of experience
          </h3>
          <p className="mt-5 leading-relaxed text-smoke">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Fusce quis tempus elit. Sed efficitur tortor neque, vitae aliquet urna varius
            sit amet. Ut rhoncus, nunc nec tincidunt volutpat, ex libero eleifend turpis, et
            venenatis augue est id lacus.
          </p>
          <a
            href="#"
            className="gradient-border-btn mt-8 inline-flex items-center gap-2 border-2 px-8 py-3 text-sm font-semibold uppercase tracking-[2px] text-ink transition-all hover:text-white"
          >
            Discover It
            <ChevronRight size={16} />
            <ChevronRight size={16} className="opacity-50" />
          </a>
        </div>
      </div>
    </section>
  )
}
