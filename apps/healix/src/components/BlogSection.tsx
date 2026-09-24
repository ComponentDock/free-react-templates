import { cn } from '@free-react-templates/ui'

interface BlogSectionProps {
  className?: string
}

const posts = [
  {
    title: "Scary Thing That You Don't Get Enough Sleep",
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    date: 'Oct 15, 2024',
    seed: 'blog-1',
  },
  {
    title: 'Your Most Important Things In Your Life',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    date: 'Oct 14, 2024',
    seed: 'blog-2',
  },
  {
    title: 'Steps To Start Your Day Fresh And Healthy',
    excerpt:
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    date: 'Oct 13, 2024',
    seed: 'blog-3',
  },
]

export function BlogSection({ className }: BlogSectionProps) {
  return (
    <section className={cn('bg-section-light py-16', className)} id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-body-dark">Latest Blog Updates</h2>
          <p className="text-body mt-2">Stay informed with our latest health news</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://picsum.photos/seed/${post.seed}/600/400')`,
                }}
              />
              <div className="p-6">
                <div className="text-xs text-brand-blue mb-2">{post.date}</div>
                <h3 className="text-lg font-bold text-body-dark mb-2">{post.title}</h3>
                <p className="text-body text-sm mb-4">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="inline-block text-brand-blue text-sm font-semibold hover:text-brand-blue-light transition-colors"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
