import { Heart, MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'The Art of Perfect Risotto',
    image: 'https://picsum.photos/seed/blog1/600/400',
    date: '24 Mar',
    excerpt:
      'Master the technique of creating creamy, al dente risotto with our step-by-step guide to this Italian classic.',
    likes: 128,
    comments: 24,
  },
  {
    title: 'Farm to Table: Why It Matters',
    image: 'https://picsum.photos/seed/blog2/600/400',
    date: '18 Mar',
    excerpt:
      'How sourcing locally grown produce elevates flavor, supports our community, and benefits the planet.',
    likes: 96,
    comments: 17,
  },
  {
    title: 'Wine Pairing for Beginners',
    image: 'https://picsum.photos/seed/blog3/600/400',
    date: '12 Mar',
    excerpt:
      'A simple guide to matching wines with food, from reds with meats to whites with seafood and desserts.',
    likes: 74,
    comments: 31,
  },
  {
    title: 'Seasonal Menus: Spring Edition',
    image: 'https://picsum.photos/seed/blog4/600/400',
    date: '05 Mar',
    excerpt:
      'Explore our new spring menu featuring fresh asparagus, spring peas, and light citrus-infused dishes.',
    likes: 112,
    comments: 29,
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold uppercase tracking-wide text-ink sm:text-4xl">
            Our Blog
          </h2>
          <p className="mx-auto max-w-2xl font-light text-mist">
            Stories from our kitchen, tips from our chefs, and the latest news from the world of
            fine dining.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-sm bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded bg-black px-3 py-1 text-xs font-semibold text-white">
                  {post.date}
                </span>
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-base font-semibold text-ink">{post.title}</h3>
                <p className="mb-4 text-sm font-light leading-relaxed text-mist">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-mist/70">
                  <span className="flex items-center gap-1">
                    <Heart className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
