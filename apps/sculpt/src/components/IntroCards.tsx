import { ChevronRight } from 'lucide-react'
import { PROGRAMS } from '../data'

/**
 * IntroCards — five equal-width solid-orange program cards overlapping the
 * hero bottom edge (pulled up 6em), each with a price, blurb, and MORE link.
 */
export function IntroCards() {
  return (
    <section id="intro" aria-label="Programs" className="relative z-20 -mt-24">
      <div className="flex flex-col md:flex-row">
        {PROGRAMS.map((program) => (
          <div key={program.name} className="bg-brand px-6 pb-8 pt-10 text-white md:w-1/5">
            <div>
              <h3 className="text-[22px] font-light">{program.name}</h3>
              <div className="mt-2">
                <span className="text-[40px] font-normal">{program.price}</span>{' '}
                <span className="text-xs uppercase">{program.month}</span>
              </div>
            </div>
            <p className="mt-3 text-white/80">{program.blurb}</p>
            <p className="mt-14">
              <a
                href="#services"
                className="inline-flex items-center gap-1 text-xs uppercase text-white"
              >
                More <ChevronRight className="h-3 w-3" aria-hidden="true" />
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
