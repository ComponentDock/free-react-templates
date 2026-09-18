import { Plus } from 'lucide-react'

export function Intro() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/vibrance-intro/600/600"
            alt="Studio work"
            className="w-full"
          />
          <button
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-pink p-3 text-white transition-transform hover:scale-110"
            aria-label="View larger"
          >
            <Plus size={24} />
          </button>
        </div>

        <div>
          <h3 className="text-3xl font-bold leading-snug text-ink md:text-4xl">
            <span className="text-brand-pink">Vibrance</span> is perfect for you and your business
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
          </a>
        </div>
      </div>
    </section>
  )
}
