import { moreFeatures } from '../data'

export function MoreFeatures() {
  return (
    <section
      id="features"
      className="relative flex min-h-screen items-center bg-dark bg-cover bg-center"
      style={{ backgroundImage: `url(${moreFeatures.image})` }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28">
        <div className="max-w-2xl">
          <span className="text-[11px] font-bold tracking-[.1rem] text-white/70 uppercase">
            {moreFeatures.kicker}
          </span>
          <h2 className="mt-2 text-5xl leading-none font-bold text-white md:text-[80px]">
            {moreFeatures.title}
          </h2>
          <p className="mt-6 leading-relaxed text-white">{moreFeatures.blurb}</p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {moreFeatures.items.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-lg bg-dark-card p-[30px] transition-shadow hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-brand to-brand-pink opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="relative">
                <h3 className="text-xl font-normal text-white transition-colors group-hover:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50 transition-colors group-hover:text-white">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
