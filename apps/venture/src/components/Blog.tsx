import { Calendar, MessageCircle } from 'lucide-react'

const posts = [
  {
    image: 'https://picsum.photos/seed/venture-blog1/600/400',
    date: 'January 28, 2024',
    comments: 5,
    title: 'Building a Strong Foundation for Your Startup Journey',
  },
  {
    image: 'https://picsum.photos/seed/venture-blog2/600/400',
    date: 'February 15, 2024',
    comments: 3,
    title: 'Strategic Growth: From Idea to Market Leader',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="group">
              <div className="relative overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-4 text-sm text-[#506172] mb-4">
                <span className="flex items-center gap-2">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <MessageCircle size={14} />
                  {post.comments} Comments
                </span>
              </div>
              <h3
                className="text-xl font-semibold text-[#0b1c39] mb-3 group-hover:text-[#04dbec] transition-colors"
                style={{ fontFamily: 'Josefin Sans, sans-serif' }}
              >
                <a href="#">{post.title}</a>
              </h3>
              <a
                href="#"
                className="text-[#04dbec] font-medium hover:text-[#03c5df] transition-colors"
              >
                Continue Reading →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
