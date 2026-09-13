import { ArrowRight } from 'lucide-react'

export function Banner() {
  return (
    <section className="relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/techvault-hero/1920/600"
          alt=""
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/30" />
      </div>
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-20">
        <div className="max-w-lg">
          <h1 className="font-display text-5xl font-extrabold uppercase leading-tight text-white">
            New Era of
            <br />
            Smartphones
          </h1>
          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-lg text-white/50 line-through">$530</span>
            <span className="text-4xl font-bold text-white">$460</span>
          </div>
          <p className="mt-2 text-lg text-white/70">Apple iPhone 6s</p>
          <button className="mt-8 inline-flex items-center gap-2 rounded bg-primary-400 px-8 py-3 font-display text-sm font-semibold uppercase text-white hover:bg-primary-500 transition-colors">
            Shop Now
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://picsum.photos/seed/techvault-phone/500/500"
            alt="Featured smartphone"
            className="h-80 w-80 object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
