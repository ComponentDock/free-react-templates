import { User, Calendar, MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'Undefined: The Third Boolean Value',
    author: 'Jacob Smith',
    date: '7 Apr 2024',
    comments: 2,
    seed: 'panorama-blog1',
  },
  {
    title: 'Where Do You Learn Modern CSS in 2025?',
    author: 'Jacob Smith',
    date: '7 Apr 2024',
    comments: 2,
    seed: 'panorama-blog2',
  },
  {
    title: 'Building Accessible React Components',
    author: 'Jacob Smith',
    date: '7 Apr 2024',
    comments: 2,
    seed: 'panorama-blog3',
  },
  {
    title: 'The Future of Web Development Tools',
    author: 'Jacob Smith',
    date: '7 Apr 2024',
    comments: 2,
    seed: 'panorama-blog4',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-ocean-400">
            Read the latest post
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Blog Posts</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg border border-gray-200 sm:flex-row"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/300/200`}
                alt={post.title}
                className="h-48 w-full object-cover sm:h-auto sm:w-40"
              />
              <div className="flex flex-1 flex-col justify-center p-5">
                <h3 className="font-semibold text-gray-900">{post.title}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <User className="h-3 w-3" /> {post.author}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" /> {post.comments}
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
