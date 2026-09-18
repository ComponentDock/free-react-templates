import { Calendar, MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'Forest responds to consultation smoking in al fresco.',
    date: 'Jan 03, 2024',
    comments: 3,
    excerpt:
      'Varius metus morbi ferme libero vehic on porta malesuada ut interdu estmales torquent vehicula parturient.',
    seed: 'expedio-blog-1',
  },
  {
    title: 'Discover the hidden gems of Southeast Asia.',
    date: 'Jan 10, 2024',
    comments: 5,
    excerpt:
      'Varius metus morbi ferme libero vehic on porta malesuada ut interdu estmales torquent vehicula parturient.',
    seed: 'expedio-blog-2',
  },
  {
    title: 'Mountain trails: a beginner guide to hiking.',
    date: 'Jan 18, 2024',
    comments: 2,
    excerpt:
      'Varius metus morbi ferme libero vehic on porta malesuada ut interdu estmales torquent vehicula parturient.',
    seed: 'expedio-blog-3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-mist py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">From our Blog</h2>
          <p className="mt-3 text-sm text-smoke">
            Fowl have fruit moveth male they are that place you will lesser
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/400`}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <a href="#" className="block">
                  <h3 className="font-display text-base font-bold leading-snug text-ink hover:text-primary-500">
                    {post.title}
                  </h3>
                </a>
                <div className="mt-3 flex items-center gap-4 text-xs text-smoke">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={12} />
                    {post.comments} Comments
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-smoke">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
