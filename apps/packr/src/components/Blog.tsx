import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'A small river named Duden flows by their place',
    category: 'Brand Content',
    date: '26 January 2017',
  },
  {
    title: 'The Big Oxmox advised her not to do so',
    category: 'Brand Content',
    date: '26 January 2017',
  },
  {
    title: 'Bookmarksgrove even the all-powerful Pointing',
    category: 'Brand Content',
    date: '26 January 2017',
  },
  {
    title: 'Even the all-powerful Pointing has no control',
    category: 'Brand Content',
    date: '26 January 2017',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center font-mono text-3xl font-normal text-ink sm:text-4xl">
          Blog
        </h2>
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <a href="#blog" className="group overflow-hidden rounded">
            <img
              src="https://picsum.photos/seed/packr-blog/800/600"
              alt="Featured blog post"
              className="h-64 w-full object-cover transition-transform group-hover:scale-105 lg:h-full"
            />
          </a>
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <a key={post.title} href="#blog" className="group block">
                <p className="font-mono text-xs text-mist">
                  <span className="text-brand">{post.category}</span> | <span>{post.date}</span>
                </p>
                <h3 className="mt-2 font-mono text-base font-medium text-ink transition-colors group-hover:text-brand">
                  {post.title}
                </h3>
                <span className="mt-2 inline-flex items-center gap-1 font-mono text-xs text-mist">
                  Read more <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
