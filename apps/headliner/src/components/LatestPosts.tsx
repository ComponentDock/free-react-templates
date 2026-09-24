const FEATURED_POST = {
  title: 'Building On Consumer Preferences Shaped By The Pandemic',
  image: 'https://picsum.photos/seed/headliner-5/600/450',
}

const SIDE_POSTS = [
  {
    id: 1,
    badge: 'Trending',
    title: 'The Pomelo Case: Scope Of Plant Variety Rights In China',
    excerpt:
      'Passion for their subjects from the subtleties of regional Thai home cooking to the intersection of food and queer culture.',
    image: 'https://picsum.photos/seed/headliner-6/200/150',
  },
  {
    id: 2,
    badge: 'Technology',
    title: 'Valuable Lessons To Take Away From COVID-19',
    excerpt:
      'How remote work reshaped office culture and what that means for the future of business communication.',
    image: 'https://picsum.photos/seed/headliner-7/200/150',
  },
] as const

export function LatestPosts() {
  return (
    <section aria-label="Latest posts" className="border-t border-border py-10">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold uppercase tracking-wide text-ink">Latest Posts</h2>
          <div className="h-[3px] flex-1 bg-border" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
          {/* Featured post */}
          <article className="group">
            <a href="#" className="block overflow-hidden">
              <img
                src={FEATURED_POST.image}
                alt={FEATURED_POST.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </a>
            <h3 className="mt-4 text-lg font-bold leading-snug text-ink group-hover:text-accent transition-colors">
              <a href="#">{FEATURED_POST.title}</a>
            </h3>
          </article>

          {/* Side posts */}
          <div className="flex flex-col gap-6">
            {SIDE_POSTS.map((post) => (
              <article key={post.id} className="flex gap-4 group">
                <a href="#" className="block shrink-0 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[100px] w-[130px] object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </a>
                <div className="flex flex-col justify-center">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-brand">
                    {post.badge}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold leading-snug text-ink group-hover:text-accent transition-colors">
                    <a href="#">{post.title}</a>
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-mist line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
