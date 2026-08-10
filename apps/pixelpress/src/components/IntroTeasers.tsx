import { introTeasers } from '../data'
import { ReadMore } from './ReadMore'
import { TopMeta } from './TopMeta'

/** Deep-purple strip with three equal-width story teasers. */
export function IntroTeasers() {
  return (
    <section className="intro-section bg-deep-purple px-4 py-[115px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 md:grid-cols-3">
        {introTeasers.map((teaser) => (
          <article key={teaser.title}>
            <TopMeta date={teaser.date} category={teaser.category} />
            <h3 className="mb-10 max-w-[370px] text-[26px] leading-snug font-medium text-white">
              {teaser.title}
            </h3>
            <p className="mb-8 text-[15px] font-medium text-muted">{teaser.excerpt}</p>
            <ReadMore />
          </article>
        ))}
      </div>
    </section>
  )
}
