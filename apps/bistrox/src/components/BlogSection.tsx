import { MessageCircle } from 'lucide-react'

interface BlogPost {
  title: string
  date: string
  author: string
  comments: number
  image: string
}

const blogPosts: BlogPost[] = [
  {
    title: 'The Best Soup Recipes For Winter',
    date: 'Jan 15, 2026',
    author: 'Admin',
    comments: 3,
    image: 'https://picsum.photos/seed/bistrox-blog1/400/300',
  },
  {
    title: 'A Guide To Wine Pairing At Home',
    date: 'Feb 20, 2026',
    author: 'Admin',
    comments: 5,
    image: 'https://picsum.photos/seed/bistrox-blog2/400/300',
  },
  {
    title: 'How To Make Perfect Pasta',
    date: 'Mar 10, 2026',
    author: 'Admin',
    comments: 2,
    image: 'https://picsum.photos/seed/bistrox-blog3/400/300',
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-2">
            Blog & News
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark font-heading">
            Blog & News
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.title} className="bg-bg-light rounded-lg overflow-hidden shadow-sm">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <div className="flex items-center gap-3 text-text-muted text-xs mb-3">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={12} />
                    {post.comments}
                  </span>
                  <span>{post.author}</span>
                </div>
                <h3 className="font-bold text-text-dark mb-3 font-heading text-lg">{post.title}</h3>
                <a
                  href="#blog"
                  className="text-brand hover:text-brand-hover text-sm font-semibold transition-colors"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
