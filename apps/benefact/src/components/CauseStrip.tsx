import { causeStrip } from '../data'

export function CauseStrip() {
  return (
    <section aria-label="Causes overview" className="relative z-10 -mt-5">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {causeStrip.map((cause) => (
            <article key={cause.title} className="relative h-[300px] overflow-hidden">
              <img
                src={cause.src}
                alt={cause.alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 mix-blend-screen"
                style={{ backgroundColor: cause.tint, opacity: 0.9 }}
              />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-sm font-light text-white/90">{cause.meta}</span>
                <h3 className="font-script text-4xl text-white">{cause.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
