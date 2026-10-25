import { exhibitions } from '../content'
import { containerClass, sectionClass, SectionHeading } from './ui'

/** The only near-black band, and the only place a tag is filled with the accent. */
export function Exhibitions() {
  return (
    <section id="exhibitions" className={`bg-primary-900 text-primary-100 ${sectionClass}`}>
      <div className={`${containerClass} mx-auto max-w-4xl`}>
        <SectionHeading
          tone="dark"
          eyebrow={exhibitions.eyebrow}
          title={exhibitions.title}
          lead={exhibitions.lead}
        />

        <ol role="list" className="mt-12">
          {exhibitions.rows.map((row) => (
            <li
              key={`${row.year}-${row.title}`}
              className="grid grid-cols-[3.5rem_1fr] gap-5 border-t border-primary-700 py-6 sm:grid-cols-[5rem_1fr]"
            >
              <span className="font-serif text-lg leading-7 text-primary-400 tabular-nums">
                {row.year}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  {row.tags.map((tag) => (
                    <span
                      key={tag}
                      className={
                        tag === 'Solo'
                          ? 'rounded-sm bg-accent-600 px-1.5 py-0.5 text-[10px] leading-[15px] font-semibold tracking-wider text-white uppercase'
                          : tag === 'Forthcoming'
                            ? 'rounded-sm px-1.5 py-0.5 text-[10px] leading-[15px] font-semibold tracking-wider text-accent-400 uppercase'
                            : 'rounded-sm bg-primary-700 px-1.5 py-0.5 text-[10px] leading-[15px] font-semibold tracking-wider text-primary-200 uppercase'
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-2 font-serif text-lg leading-7 text-primary-100 italic">
                  {row.title}
                </h3>
                <p className="text-sm leading-5 text-primary-300">{row.venue}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 border-t border-primary-700 pt-6 text-sm leading-6 text-primary-400">
          {exhibitions.note}
        </p>
      </div>
    </section>
  )
}
