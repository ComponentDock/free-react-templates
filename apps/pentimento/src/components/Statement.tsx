import { statement } from '../content'
import { containerClass, sectionClass, SectionHeading } from './ui'

/**
 * The sticky figure is the band's whole idea: the photograph holds still while
 * the four paragraphs and the pull quote pass it.
 */
export function Statement() {
  const [first, ...rest] = statement.paragraphs
  return (
    <section id="statement" className={`bg-white dark:bg-gray-950 ${sectionClass}`}>
      <div className={containerClass}>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <figure className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-sm bg-primary-100 dark:bg-primary-800">
              <img
                src={statement.image}
                alt=""
                width={700}
                height={875}
                loading="lazy"
                className="aspect-[4/5] h-auto w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-xs leading-4 text-primary-500 italic">
              {statement.caption}
            </figcaption>
          </figure>

          <div>
            <SectionHeading eyebrow={statement.eyebrow} title={statement.title} />
            <div className="mt-8 space-y-6">
              <p className="text-base leading-[1.85] text-primary-700 dark:text-primary-300">
                {first}
              </p>
              <blockquote className="border-l-2 border-accent-600 py-1 pl-6 font-serif text-xl leading-[32.5px] text-primary-800 italic dark:text-primary-100">
                {statement.quote}
              </blockquote>
              {rest.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-base leading-[1.85] text-primary-700 dark:text-primary-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
