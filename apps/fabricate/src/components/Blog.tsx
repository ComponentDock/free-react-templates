import { Heart, MessageCircle } from 'lucide-react'

const posts = [
  {
    image: 'https://picsum.photos/seed/fabricate-b1/600/400',
    author: 'Mark Wilson',
    date: '13th Dec',
    likes: 15,
    comments: 4,
    title: 'Revolutionizing Factory Automation with AI',
    excerpt:
      'Discover how artificial intelligence is transforming modern manufacturing processes and driving efficiency across the industrial sector.',
  },
  {
    image: 'https://picsum.photos/seed/fabricate-b2/600/400',
    author: 'Sarah Chen',
    date: '10th Dec',
    likes: 23,
    comments: 7,
    title: 'Sustainable Industrial Practices for 2025',
    excerpt:
      'A comprehensive guide to implementing eco-friendly manufacturing processes that reduce waste and improve sustainability metrics.',
  },
  {
    image: 'https://picsum.photos/seed/fabricate-b3/600/400',
    author: 'David Park',
    date: '8th Dec',
    likes: 18,
    comments: 3,
    title: 'The Future of Smart Manufacturing',
    excerpt:
      'Exploring the latest trends in IoT-enabled industrial equipment and predictive maintenance strategies.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Latest Posts from Our Blog
          </h2>
          <p className="text-mist max-w-xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in industrial engineering
            and manufacturing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                {/* Author + meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center">
                      <span className="text-brand text-xs font-bold">{post.author.charAt(0)}</span>
                    </div>
                    <span className="text-sm text-mist">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-mist">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" /> {post.comments}
                    </span>
                  </div>
                </div>
                <a href="#" className="block mb-3">
                  <h4 className="text-lg font-semibold text-ink hover:text-brand transition-colors">
                    {post.title}
                  </h4>
                </a>
                <p className="text-mist text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
