import { compactPosts, topFive } from '../data'

function CompactPost({ post }: { post: (typeof compactPosts)[number] }) {
  return (
    <article className="mb-[43px] flex items-start gap-[27px]">
      <img
        src={post.image}
        alt=""
        loading="lazy"
        className="h-[166px] w-[166px] shrink-0 object-cover"
      />
      <div>
        <p className="text-sm font-medium text-brand">{post.date}</p>
        <h3 className="mt-1 text-xl font-bold text-white">
          <a href="#blog" className="transition-colors hover:text-brand">
            {post.title}
          </a>
        </h3>
        <p className="mt-1 text-sm text-meta">{post.meta}</p>
        <p className="mt-3 text-base leading-relaxed text-meta">{post.excerpt}</p>
      </div>
    </article>
  )
}

function TopFiveWidget() {
  return (
    <section aria-label="Top 5 this week">
      <h2 className="mb-14 text-lg font-bold text-white">Top 5 this week</h2>
      <ul className="space-y-6">
        {topFive.map((item, i) => (
          <li key={item.title + i} className="flex items-start gap-[27px]">
            <span className="w-6 text-xl leading-none font-bold text-white">
              {String(i + 1).padStart(2, '0')}
            </span>
            <img
              src={`https://picsum.photos/seed/guild-top-${i + 1}/85/85`}
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

export function BlogListSection() {
  return (
    <section id="blog-list" className="bg-section-2 py-[106px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 px-4 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {compactPosts.map((post) => (
            <CompactPost key={post.image} post={post} />
          ))}
        </div>
        <aside className="col-span-1 lg:col-span-4">
          <TopFiveWidget />
        </aside>
      </div>
    </section>
  )
}
