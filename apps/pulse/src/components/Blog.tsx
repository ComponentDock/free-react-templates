import { MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'How to Build a Strong Digital Brand Presence',
    excerpt: 'Discover the essential strategies for establishing your brand in the digital age.',
    image: 'https://picsum.photos/seed/pulse-blog1/600/400',
    comments: 12,
    date: 'Mar 15, 2025',
  },
  {
    title: 'Top 10 Web Design Trends for 2025',
    excerpt: 'Stay ahead of the curve with these cutting-edge web design trends.',
    image: 'https://picsum.photos/seed/pulse-blog2/600/400',
    comments: 8,
    date: 'Mar 10, 2025',
  },
  {
    title: 'The Power of Social Media Marketing',
    excerpt: 'Learn how to leverage social media platforms to grow your business.',
    image: 'https://picsum.photos/seed/pulse-blog3/600/400',
    comments: 5,
    date: 'Mar 5, 2025',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-navy-700 sm:text-4xl">
          Recent From Blog
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-lg border border-gray-200"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-400">{post.date}</p>
                <h3 className="mt-2 text-lg font-semibold text-navy-700">{post.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-sm text-gray-400">
                    <MessageCircle className="h-4 w-4" />
                    {post.comments} Comments
                  </span>
                  <a
                    href="#"
                    className="text-sm font-medium text-pulse-400 transition-colors hover:text-pulse-500"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
