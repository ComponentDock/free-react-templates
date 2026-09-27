import { Calendar, Heart, MessageCircle } from 'lucide-react'

const posts = [
  {
    image: 'https://picsum.photos/seed/turnkey-b1/400/250',
    title: 'Portable Fashion for Women',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '13th Dec',
    likes: 15,
    comments: 2,
  },
  {
    image: 'https://picsum.photos/seed/turnkey-b2/400/250',
    title: 'Summer Ware Are Coming',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '13th Dec',
    likes: 15,
    comments: 2,
  },
  {
    image: 'https://picsum.photos/seed/turnkey-b3/400/250',
    title: 'Summer Ware Are Coming',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '13th Dec',
    likes: 15,
    comments: 2,
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-heading mb-3">Latest Blog Posts</h2>
          <p className="text-body max-w-xl mx-auto">
            Stay updated with our latest news and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-lg font-medium text-heading mb-2">{post.title}</h3>
                <p className="text-body text-sm mb-4">{post.excerpt}</p>
                <div className="flex gap-4 text-xs text-body">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart size={12} /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={12} /> {post.comments}
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
