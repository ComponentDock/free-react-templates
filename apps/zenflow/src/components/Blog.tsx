const blogPosts = [
  {
    title: 'Latest Design Trends in 2024',
    image: 'https://picsum.photos/seed/zenflow-blog1/600/400',
    date: 'March 15, 2024',
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
  },
  {
    title: 'How to Build Better Products',
    image: 'https://picsum.photos/seed/zenflow-blog2/600/400',
    date: 'March 10, 2024',
    excerpt: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  },
] as const

const twitterFeed = [
  { id: 1, text: 'Excited to announce our new product launch! Stay tuned for more updates.' },
  { id: 2, text: 'Great meeting with our team today. Innovation never stops.' },
  { id: 3, text: 'Check out our latest blog post on web design trends.' },
  { id: 4, text: 'Thank you all for the amazing support! We are just getting started.' },
] as const

const clientLogos = ['Company A', 'Company B', 'Company C', 'Company D', 'Company E'] as const

export function Blog() {
  return (
    <section id="news" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-wider text-ink sm:text-4xl">
          Our Latest News
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 bg-primary-400" />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Twitter Feed */}
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-ink">
              Twitter Feed
            </h3>
            <div className="mt-4 space-y-4">
              {twitterFeed.map((item) => (
                <div key={item.id} className="border-l-2 border-primary-400 pl-4">
                  <p className="text-sm text-body">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Blog Cards */}
          <div className="lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2">
              {blogPosts.map((post) => (
                <article key={post.title} className="group overflow-hidden bg-white shadow-sm">
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-muted">{post.date}</span>
                    <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-wider text-ink">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-body">{post.excerpt}</p>
                    <a
                      href="#"
                      className="mt-4 inline-block text-sm font-bold uppercase tracking-wider text-primary-400 hover:text-primary-500"
                    >
                      Read More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <div className="flex flex-wrap items-center justify-center gap-12">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="text-lg font-bold text-muted opacity-50 hover:opacity-100 transition-opacity"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
