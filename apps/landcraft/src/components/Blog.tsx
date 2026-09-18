import { User, MessageCircle, Heart } from 'lucide-react'

const posts = [
  {
    title: 'Essential Spring Lawn Care Tips',
    excerpt:
      'Discover the key steps to prepare your lawn for the growing season with our expert tips.',
    image: 'https://picsum.photos/seed/landcraft-blog1/400/250',
    author: 'Admin',
    comments: 5,
    likes: 12,
  },
  {
    title: 'Designing a Low-Maintenance Garden',
    excerpt:
      'Learn how to create a beautiful garden that requires minimal upkeep throughout the year.',
    image: 'https://picsum.photos/seed/landcraft-blog2/400/250',
    author: 'Admin',
    comments: 3,
    likes: 8,
  },
  {
    title: 'Sustainable Landscaping Practices',
    excerpt:
      'Explore eco-friendly landscaping techniques that benefit both your property and the environment.',
    image: 'https://picsum.photos/seed/landcraft-blog3/400/250',
    author: 'Admin',
    comments: 7,
    likes: 15,
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-alt-bg" data-testid="blog">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Creative Blog</h2>
          <p className="text-body">
            Stay updated with the latest landscaping tips, trends, and insights from our team.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex gap-4 text-xs text-body mb-3">
                  <span className="flex items-center gap-1">
                    <User size={12} /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={12} /> {post.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart size={12} /> {post.likes}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-body text-sm mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-block px-4 py-2 bg-brand text-white text-sm font-semibold rounded hover:bg-brand-dark transition-colors"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
