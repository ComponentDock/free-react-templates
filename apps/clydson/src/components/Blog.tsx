import { MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'Why Lead Generation is Key for Business Growth',
    date: 'July 03, 2020',
    author: 'Admin',
    comments: 3,
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    seed: 'clydson-blog-1',
  },
  {
    title: 'Why Lead Generation is Key for Business Growth',
    date: 'July 03, 2020',
    author: 'Admin',
    comments: 3,
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    seed: 'clydson-blog-2',
  },
  {
    title: 'Why Lead Generation is Key for Business Growth',
    date: 'July 03, 2020',
    author: 'Admin',
    comments: 3,
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    seed: 'clydson-blog-3',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand text-sm uppercase tracking-widest font-medium">Blog</span>
          <h2 className="text-3xl font-bold text-heading mt-2 mb-4">Our Blog</h2>
          <p className="text-body max-w-xl mx-auto">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${post.seed}/400/250`}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-body mb-3">
                  <span>{post.date}</span>
                  <span className="text-brand">{post.author}</span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={14} /> {post.comments}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-heading mb-2 hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-body text-sm">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
