import { Calendar } from 'lucide-react'

const posts = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/inkvibe-blog1/400/250',
    title: 'How to Choose Your First Tattoo Design',
    date: 'Sep 10, 2026',
    excerpt:
      'Choosing your first tattoo can be overwhelming. Here are our top tips for finding a design you will love forever.',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/inkvibe-blog2/400/250',
    title: 'Aftercare Guide: Keep Your Ink Fresh',
    date: 'Sep 5, 2026',
    excerpt:
      'Proper aftercare is essential for a tattoo that heals beautifully. Follow our comprehensive guide.',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/inkvibe-blog3/400/250',
    title: 'The Rise of Watercolor Tattoos',
    date: 'Aug 28, 2026',
    excerpt:
      'Watercolor tattoos are trending. Learn what makes them unique and whether they are right for you.',
  },
  {
    id: 4,
    image: 'https://picsum.photos/seed/inkvibe-blog4/400/250',
    title: 'Studio Hygiene: What to Expect',
    date: 'Aug 20, 2026',
    excerpt:
      'Your safety matters. Here is how we maintain the highest standards of hygiene at our studio.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-void py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-white">Latest News</h2>
          <p className="mt-4 text-gray-400">Tips, trends, and stories from the studio</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-lg border border-gray-800 bg-obsidian"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" aria-hidden="true" />
                  {post.date}
                </div>
                <h3 className="mt-2 font-display text-base font-semibold text-white line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 line-clamp-3">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
