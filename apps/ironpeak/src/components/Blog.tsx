import { Calendar } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const posts = [
  {
    title: 'Body Building',
    date: 'April 22, 2024',
    description:
      'Learn the fundamentals of strength training and how to build lean muscle with progressive overload techniques.',
    image: 'https://picsum.photos/seed/ironpeak-blog1/600/400',
  },
  {
    title: 'Yoga Pilates',
    date: 'April 22, 2024',
    description:
      'Discover the benefits of combining yoga and pilates for improved flexibility, balance, and mental clarity.',
    image: 'https://picsum.photos/seed/ironpeak-blog2/600/400',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold uppercase tracking-wider text-ink">Blog</h2>
        <span className="text-6xl font-extrabold uppercase tracking-wider text-gray-100">
          Our Blog
        </span>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
        {posts.map((post) => (
          <div
            key={post.title}
            className="flex flex-col overflow-hidden bg-white shadow-sm sm:flex-row"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-48 w-full object-cover sm:h-auto sm:w-48"
              loading="lazy"
            />
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold text-ink">{post.title}</h3>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                <Calendar size={12} className="text-brand" /> {post.date}
              </div>
              <p className="mt-2 text-sm text-muted">{post.description}</p>
              <div className="mt-4">
                <Button className="bg-brand px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ink hover:bg-brand-dark">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
