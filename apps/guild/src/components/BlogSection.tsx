import { cn } from '@free-react-templates/ui'
import {
  byLabel,
  categories,
  latestComments,
  latestNews,
  posts,
  readMoreLabel,
  searchLabel,
  sidebarAd,
} from '../data'

function DateBadge({ date }: { date: string }) {
  return (
    <span className="inline-block bg-brand px-4 py-[3px] text-sm leading-none font-bold text-ink">
      {date}
    </span>
  )
}

function PostMeta({ category, comments }: { category: string; comments: string }) {
  return (
    <p className="text-sm text-meta">
      {byLabel} <span className="mx-1 text-meta">|</span> in{' '}
      <a href="#blog" className="text-post-link">
        {category}
      </a>{' '}
      <span className="mx-1 text-meta">|</span> {comments}
    </p>
  )
}

function PostCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <article className={cn('mb-[70px]', post.featured && 'featured-post')}>
      <img src={post.image} alt="" loading="lazy" className="mb-[34px] h-64 w-full object-cover" />
      <DateBadge date={post.date} />
      <h3 className={cn('mt-[25px] font-bold text-white', post.featured ? 'text-3xl' : 'text-2xl')}>
        <a href="#blog" className="transition-colors hover:text-brand">
          {post.title}
        </a>
      </h3>
      <div className={cn('mt-[15px]', post.featured ? 'mb-[30px]' : 'mb-5')}>
        <PostMeta category={post.category} comments={post.comments} />
      </div>
      <p className="max-w-2xl text-base leading-relaxed text-meta">{post.excerpt}</p>
      <a
        href="#blog"
        className="mt-8 inline-flex min-w-[164px] items-center justify-center rounded-full bg-brand px-[47px] py-[21px] text-sm font-semibold uppercase leading-none text-ink transition-opacity hover:opacity-90"
      >
        {readMoreLabel}
      </a>
    </article>
  )
}

function CategoriesWidget() {
  const badgeColors = ['bg-cata-1', 'bg-cata-2', 'bg-cata-3', 'bg-cata-4', 'bg-cata-5', 'bg-cata-6']
  return (
    <section aria-label="Categories" className="mb-[70px]">
      <h2 className="mb-14 text-lg font-bold text-white">Categories</h2>
      <ul className="space-y-5">
        {categories.map((category, i) => (
          <li key={category.name}>
            <a
              href="#blog"
              className="flex items-center justify-between text-base text-meta transition-colors hover:text-white"
            >
              {category.name}
              <span
                className={cn(
                  'flex h-[25px] w-[25px] items-center justify-center rounded-full text-[11px] leading-none text-ink',
                  badgeColors[i],
                )}
              >
                {category.count}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

function LatestNewsWidget() {
  return (
    <section aria-label="Latest News" className="mb-[70px]">
      <h2 className="mb-14 text-lg font-bold text-white">Latest News</h2>
      <ul className="space-y-6">
        {latestNews.map((item) => (
          <li key={item.title} className="flex items-start gap-[27px]">
            <img
              src={item.image}
              alt=""
              loading="lazy"
              className="h-[85px] w-[85px] object-cover"
            />
            <div>
              <p className="text-sm font-medium text-brand">{item.date}</p>
              <h3 className="mt-1 text-base font-bold text-white">
                <a href="#blog" className="transition-colors hover:text-brand">
                  {item.title}
                </a>
              </h3>
              <p className="mt-1 text-xs text-meta">{item.meta}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function LatestCommentsWidget() {
  return (
    <section aria-label="Latest Comments" className="mb-[70px]">
      <h2 className="mb-14 text-lg font-bold text-white">Latest Comments</h2>
      <ul className="space-y-6">
        {latestComments.map((comment) => (
          <li key={`${comment.name}-${comment.post}`} className="flex items-start gap-4">
            <img
              src={`https://picsum.photos/seed/guild-avatar-${comment.name.replace(/\s+/g, '-').toLowerCase()}/55/55`}
              alt=""
              loading="lazy"
              className="h-[55px] w-[55px] rounded-full object-cover"
            />
            <div>
              <h3 className="text-base font-bold text-white">
                {comment.name} <span className="font-normal text-meta">In</span>{' '}
                <a
                  href="#blog"
                  className="text-white underline underline-offset-2 hover:text-brand"
                >
                  {comment.post}
                </a>
              </h3>
              <p className="mt-1 text-xs text-meta">{comment.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Sidebar() {
  return (
    <aside className="col-span-1 lg:col-span-4">
      <div className="mb-[70px]">
        <label htmlFor="guild-search" className="sr-only">
          {searchLabel}
        </label>
        <input
          id="guild-search"
          type="search"
          placeholder={searchLabel}
          className="h-[53px] w-full border-0 border-b-[3px] border-brand bg-transparent text-sm text-white italic outline-none placeholder:text-meta"
        />
      </div>
      <CategoriesWidget />
      <LatestNewsWidget />
      <img src={sidebarAd.image} alt={sidebarAd.alt} loading="lazy" className="mb-[70px] w-full" />
      <LatestCommentsWidget />
    </aside>
  )
}

export function BlogSection() {
  return (
    <section id="blog" className="bg-section py-[106px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 px-4 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard key={post.title + post.image} post={post} />
          ))}
        </div>
        <Sidebar />
      </div>
    </section>
  )
}
