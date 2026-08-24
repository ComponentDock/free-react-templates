import { Calendar, ArrowRight } from 'lucide-react'

interface Post {
  id: number
  title: string
  date: string
  image: string
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Far far away, behind the word mountains',
    date: 'March 15, 2025',
    image: 'https://picsum.photos/seed/voyage-blog1/600/400',
  },
  {
    id: 2,
    title: 'Far far away, behind the word mountains',
    date: 'March 10, 2025',
    image: 'https://picsum.photos/seed/voyage-blog2/600/400',
  },
  {
    id: 3,
    title: 'Far far away, behind the word mountains',
    date: 'March 5, 2025',
    image: 'https://picsum.photos/seed/voyage-blog3/600/400',
  },
  {
    id: 4,
    title: 'Far far away, behind the word mountains',
    date: 'February 28, 2025',
    image: 'https://picsum.photos/seed/voyage-blog4/600/400',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-ink sm:text-4xl">
          Recent Posts
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" aria-hidden="true" />
                  {post.date}
                </div>
                <h3 className="mt-2 font-heading text-base font-bold text-ink">
                  <a href="#blog" className="hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <a
                  href="#blog"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand transition-colors hover:text-brand-dark"
                >
                  Read More
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
