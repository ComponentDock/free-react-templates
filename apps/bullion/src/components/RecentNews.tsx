import { recentMiniPosts, recentNewsCard, recentNewsTitle, imgUrl } from '../data'
import { MiniPostRow } from './MiniPostRow'
import { SectionTitle } from './SectionTitle'
import { StoryMeta } from './StoryMeta'

/** RECENT NEWS column: one large image card plus four mini posts with
    100×100 thumbnails (reference: .p-title + .wh-100x/.ml-120). */
export function RecentNews() {
  return (
    <section>
      <SectionTitle>{recentNewsTitle}</SectionTitle>
      <div className="grid gap-10 md:grid-cols-2">
        <article>
          <img
            src={imgUrl(recentNewsCard.seed, 600, 450)}
            alt={recentNewsCard.headline}
            className="w-full object-cover"
          />
          <h3 className="pt-5 text-lg font-bold">
            <a href="#story" className="text-ink transition-colors hover:text-accent">
              {recentNewsCard.headline}
            </a>
          </h3>
          <StoryMeta
            author={recentNewsCard.author}
            date={recentNewsCard.date}
            views={recentNewsCard.views}
            comments={recentNewsCard.comments}
            accentAuthor={false}
            className="mt-3"
          />
          <p className="mt-3 text-sm leading-relaxed text-meta">{recentNewsCard.blurb}</p>
        </article>
        <div className="space-y-5">
          {recentMiniPosts.map((post) => (
            <MiniPostRow key={post.seed} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
