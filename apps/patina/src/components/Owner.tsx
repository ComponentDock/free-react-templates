import { owner } from '../content'
import { Eyebrow, containerClass, sectionClass } from './ui'

/** The studio statement, centred on 768 px, with the page's only underlined link. */
export function Owner() {
  return (
    <section id="owner" aria-labelledby="owner-heading" className={`bg-ink-900 ${sectionClass}`}>
      <div className={containerClass}>
        <div className="mx-auto max-w-3xl text-center">
          <img
            src={owner.portrait}
            alt={owner.portraitAlt}
            width={320}
            height={320}
            loading="lazy"
            className="mx-auto h-28 w-28 rounded-full object-cover"
          />
          <div className="mt-6">
            <Eyebrow>{owner.eyebrow}</Eyebrow>
          </div>
          <p className="mt-5 font-serif text-2xl leading-[1.25] text-white lg:text-3xl">{owner.lead}</p>
          {owner.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-5 text-lg leading-7 text-ink-200">
              {paragraph}
            </p>
          ))}
          <p className="mt-8 font-serif text-xl leading-7 text-white">{owner.signature}</p>
          <p className="mt-1 text-xs font-semibold tracking-[0.18em] text-ink-300 uppercase">
            {owner.cityLine}
          </p>
          <a
            href={owner.link.href}
            className="mt-8 inline-flex items-center gap-2 border-b border-primary-500 pb-1 text-xs font-semibold tracking-[0.18em] text-primary-400 uppercase transition-colors hover:text-primary-300"
          >
            {owner.link.label}
          </a>
        </div>
      </div>
    </section>
  )
}
