import { work } from '../data'

/** Photo "How it works" band: a cover background with a white heading and
 *  three steps, each with a dark 76px number square and white text. */
export function Work() {
  return (
    <section aria-label="How it works" className="relative overflow-hidden py-20">
      <img src={work.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white md:text-[48px]">{work.eyebrow}</h2>
          <p className="mt-3 text-lg text-white/80">{work.subline}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {work.steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <span className="flex h-[76px] w-[76px] shrink-0 items-center justify-center bg-number-dark text-2xl font-bold text-white">
                {step.number}
              </span>
              <div>
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/85">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
