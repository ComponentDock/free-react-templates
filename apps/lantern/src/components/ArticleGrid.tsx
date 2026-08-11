import { Heart, MessageCircle, Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import {
  articles,
  categoryColors,
  loadMoreLabel,
  playLabel,
  trendingFeatured,
  trendingSmall,
  trendingTitle,
  videoList,
  videosFeatured,
  videosTitle,
} from '../data'

const metaClasses = 'flex items-center gap-4 text-xs text-lt-black'

function MetaRow({ likes, comments }: { likes: number; comments: number }) {
  return (
    <p className={metaClasses}>
      <span className="flex items-center gap-1">
        <Heart className="h-3.5 w-3.5" aria-hidden="true" />
        {likes}
      </span>
      <span className="flex items-center gap-1">
        <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
        {comments}
      </span>
    </p>
  )
}

function CategoryTag({ category }: { category: (typeof articles)[number]['category'] }) {
  return (
    <p className={`text-[11px] font-bold uppercase tracking-[0.2em] ${categoryColors[category]}`}>
      {category}
    </p>
  )
}

/** Left column of the light-grey main section: 3-up article card grid,
    "Whats trending" and "Most Popular Videos" feature blocks (split cards +
    small cards with round play buttons) and a LOAD MORE outline button
    (reference: col-lg-8 on the Quitelight preview). */
export function ArticleGrid() {
  return (
    <div className="lg:col-span-8 lg:pr-8">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <article key={article.seed} className="bg-white">
            <a href="#article">
              <img
                src={`https://picsum.photos/seed/${article.seed}/400/250`}
                alt=""
                className="h-44 w-full object-cover"
              />
            </a>
            <div className="p-5">
              <CategoryTag category={article.category} />
              <h3 className="mt-2 text-base font-bold leading-snug">
                <a href="#article" className="transition-colors hover:text-brand">
                  {article.title}
                </a>
              </h3>
              <p className="mt-3 flex items-center gap-4 text-xs text-lt-black">
                <span className="flex items-center gap-1">
                  <Heart className="h-3.5 w-3.5" aria-hidden="true" />
                  {article.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  {article.comments}
                </span>
              </p>
            </div>
          </article>
        ))}
      </div>

      <h2 className="mt-14 text-lg font-bold tracking-[0.15em]">{trendingTitle}</h2>
      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <a href="#trending">
          <img
            src={`https://picsum.photos/seed/${trendingFeatured.seed}/600/400`}
            alt=""
            className="h-full w-full object-cover"
          />
        </a>
        <div className="flex flex-col justify-center bg-white p-6">
          <CategoryTag category={trendingFeatured.category} />
          <h3 className="mt-2 text-2xl font-bold leading-tight">
            <a href="#trending" className="transition-colors hover:text-brand">
              {trendingFeatured.title}
            </a>
          </h3>
          <div className="mt-4">
            <MetaRow likes={trendingFeatured.likes} comments={trendingFeatured.comments} />
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {trendingSmall.map((item) => (
          <article key={item.seed} className="bg-white p-4">
            <a href="#trending">
              <img
                src={`https://picsum.photos/seed/${item.seed}/400/250`}
                alt=""
                className="h-36 w-full object-cover"
              />
            </a>
            <div className="mt-3">
              <CategoryTag category={item.category} />
              <h4 className="mt-1.5 text-sm font-bold leading-snug">
                <a href="#trending" className="transition-colors hover:text-brand">
                  {item.title}
                </a>
              </h4>
              <div className="mt-2">
                <MetaRow likes={item.likes} comments={item.comments} />
              </div>
            </div>
          </article>
        ))}
      </div>

      <h2 className="mt-14 text-lg font-bold tracking-[0.15em]">{videosTitle}</h2>
      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <div className="relative">
          <img
            src={`https://picsum.photos/seed/${videosFeatured.seed}/600/400`}
            alt=""
            className="h-full w-full object-cover"
          />
          <a
            href="#video"
            aria-label={playLabel(videosFeatured.title)}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/50 transition-colors hover:bg-brand">
              <Play className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
          </a>
        </div>
        <div className="flex flex-col justify-center bg-white p-6">
          <CategoryTag category={videosFeatured.category} />
          <h3 className="mt-2 text-2xl font-bold leading-tight">
            <a href="#video" className="transition-colors hover:text-brand">
              {videosFeatured.title}
            </a>
          </h3>
          <div className="mt-4">
            <MetaRow likes={videosFeatured.likes} comments={videosFeatured.comments} />
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {videoList.map((item) => (
          <article key={item.seed} className="bg-white">
            <div className="relative">
              <img
                src={`https://picsum.photos/seed/${item.seed}/400/250`}
                alt=""
                className="h-40 w-full object-cover"
              />
              <a
                href="#video"
                aria-label={playLabel(item.title)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50 transition-colors hover:bg-brand">
                  <Play className="h-5 w-5 text-white" aria-hidden="true" />
                </span>
              </a>
            </div>
            <div className="p-4">
              <CategoryTag category={item.category} />
              <h4 className="mt-1.5 text-sm font-bold leading-snug">
                <a href="#video" className="transition-colors hover:text-brand">
                  {item.title}
                </a>
              </h4>
              <div className="mt-2">
                <MetaRow likes={item.likes} comments={item.comments} />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 text-center">
        <ButtonLink
          href="#load-more"
          variant="outline"
          className="h-[45px] rounded-[2px] border-ash px-10 text-xs font-semibold uppercase tracking-[0.2em] text-ash hover:border-brand hover:bg-brand hover:text-ink"
        >
          {loadMoreLabel}
        </ButtonLink>
      </div>
    </div>
  )
}
