import { ArrowRight } from 'lucide-react'
import { pics } from '../data'

export function Program() {
  return (
    <section id="program" className="py-16 md:py-24" aria-label="Recreational program">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <div className="md:order-2">
          <h4 className="mb-2 font-display text-sm font-semibold tracking-widest text-muted uppercase">
            Recreational Program
          </h4>
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            Deep which above behold an woter set a herb dry days.
          </h2>
          <p className="mt-5 leading-relaxed text-body">
            A created won't created subdue a every green his set which above firmament earth
            firmament. Seed firmament be likeness fruitful to called waters. Given great said
            seasons his midst beast.
          </p>
          <p className="mt-4 leading-relaxed text-body">
            A created won't created subdue a every green his set which above firmament earth
            firmament. Seed firmament be likeness fruitful to called waters.
          </p>
          <a
            href="#players"
            className="mt-8 inline-flex items-center gap-2 bg-brand px-8 py-3.5 text-xs font-bold tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-brand"
            style={{ border: '2px solid transparent' }}
          >
            read more
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <img
          src={pics.program}
          alt="Recreational basketball program"
          className="w-full rounded-sm object-cover md:order-1"
          width={640}
          height={520}
        />
      </div>
    </section>
  )
}
