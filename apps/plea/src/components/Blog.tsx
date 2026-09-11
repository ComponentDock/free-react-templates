import { Calendar } from 'lucide-react'

const posts = [
  {
    image: 'https://picsum.photos/seed/plea-blog1/600/400',
    date: 'March 15, 2024',
    title: 'Understanding Anxiety',
    excerpt:
      'Learn about the different types of anxiety and effective strategies for managing symptoms in daily life.',
  },
  {
    image: 'https://picsum.photos/seed/plea-blog2/600/400',
    date: 'March 10, 2024',
    title: 'Family Communication',
    excerpt:
      'Discover techniques for improving communication within your family and building stronger connections.',
  },
  {
    image: 'https://picsum.photos/seed/plea-blog3/600/400',
    date: 'March 5, 2024',
    title: 'When to Seek Counseling',
    excerpt:
      'Recognize the signs that professional counseling may be beneficial and how to take the first step.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">Our Blog</h2>
          <p className="mt-4 text-gray-600">Stay informed with our latest articles and insights</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#1a1a1a]">{post.title}</h3>
                <p className="mb-4 text-gray-600">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-sm font-semibold text-[#589167] transition-colors hover:text-[#4a7a59]"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
