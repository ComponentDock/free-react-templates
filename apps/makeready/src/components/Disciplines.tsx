import { disciplines } from '../content'
import { MonoLabel, Reveal, SectionIntro, TagPill, containerClass, sectionClass } from './ui'

/**
 * The page's only near-black band, and its only inverted chip. Four things the
 * studio does, each with a starting price printed beside it — the section that
 * makes the hero's claim checkable.
 */
export function Disciplines() {
  return (
    <section id="disciplines" className={`${sectionClass} bg-primary-900 text-primary-50`}>
      <div className={containerClass}>
        <SectionIntro
          eyebrow={disciplines.eyebrow}
          title={disciplines.title}
          lead={disciplines.lead}
          tone="dark"
          chipTone="inverted"
        />

        <ul className="mt-14 divide-y divide-primary-700 border-y border-primary-700">
          {disciplines.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <li
                data-testid="discipline-row"
                className="group grid gap-6 py-8 sm:grid-cols-[1fr_1.4fr] sm:gap-12"
              >
                <div>
                  <h3 className="text-2xl leading-9 font-bold text-primary-50 transition-colors group-hover:text-accent-400 sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2">
                    <MonoLabel className="text-accent-400">{item.price}</MonoLabel>
                  </p>
                </div>
                <div>
                  <p className="text-base leading-[26px] text-primary-200">{item.body}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <TagPill key={tag}>{tag}</TagPill>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
