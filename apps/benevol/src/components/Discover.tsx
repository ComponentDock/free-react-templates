import { cn } from '@free-react-templates/ui'
import { DISCOVER_HEADING, DISCOVER_INTRO, DISCOVER_ROWS } from '../data'

/**
 * Discover — centered heading block followed by two alternating
 * image/text rows, each with a heading, paragraph, and two left-aligned
 * mini counters (orange Anton numbers with a left underline).
 */
export function Discover() {
  return (
    <section
      id="discover-section"
      aria-label="Discover our work"
      className="bg-white py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl uppercase tracking-[0.1rem] text-black md:text-6xl">
            {DISCOVER_HEADING}
          </h2>
          <p className="mt-5 text-gray-500">{DISCOVER_INTRO}</p>
        </div>

        {DISCOVER_ROWS.map((row) => (
          <div key={row.title} className="mt-16 grid items-center gap-10 md:grid-cols-2">
            <div className={cn(row.reverse && 'md:order-2')}>
              <img src={row.image} alt={row.alt} className="h-full w-full object-cover" />
            </div>
            <div className={cn(row.reverse && 'md:order-1')}>
              <h3 className="font-display text-2xl uppercase tracking-[0.1rem] text-black md:text-3xl">
                {row.title}
              </h3>
              <p className="mt-4 text-gray-500">{row.body}</p>
              <div className="mt-8 flex gap-14">
                {row.counters.map((counter) => (
                  <div key={counter.caption} className="text-left">
                    <div className="font-display text-4xl text-primary-600">{counter.value}</div>
                    <div className="mb-4 mt-4 h-[3px] w-[50px] bg-black/30" aria-hidden="true" />
                    <div className="text-gray-600">{counter.caption}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
