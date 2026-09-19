import { User, Calendar, MessageCircle } from 'lucide-react'

const posts = [
  {
    image: 'https://picsum.photos/seed/precept-blog1/400/250',
    title: 'Learning to teach more effectively',
    date: 'Jan 12, 2026',
    author: 'Admin',
    comments: 5,
    excerpt:
      'Teaching is a complex activity that requires a deep understanding of both the subject matter and the learning process.',
  },
  {
    image: 'https://picsum.photos/seed/precept-blog2/400/250',
    title: 'The future of online education',
    date: 'Feb 28, 2026',
    author: 'Admin',
    comments: 3,
    excerpt:
      'Online education is rapidly evolving with new technologies and methodologies that make learning more accessible.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-heading mb-2">Latest Posts From Blog</h1>
          <p className="text-body">The purpose of our knowledge hub.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.title} className="bg-white">
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover mb-4" />
              <div className="flex gap-4 text-xs text-body mb-3">
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" /> {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-3 h-3" /> {post.comments} Comments
                </span>
              </div>
              <h3 className="text-lg font-semibold text-heading mb-2">
                <a href="#" className="hover:text-brand transition-colors">
                  {post.title}
                </a>
              </h3>
              <p className="text-body text-sm mb-4">{post.excerpt}</p>
              <a
                href="#"
                className="inline-block border border-brand text-brand px-6 py-2 text-sm font-medium hover:bg-brand hover:text-white transition-all"
              >
                View More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
