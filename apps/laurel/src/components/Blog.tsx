import { Calendar, User } from 'lucide-react'

const posts = [
  {
    image: 'https://picsum.photos/seed/laurel-blog1/600/400',
    title: 'The Future of Online Education in 2025',
    date: 'January 15, 2025',
    author: 'Laurel Team',
  },
  {
    image: 'https://picsum.photos/seed/laurel-blog2/600/400',
    title: 'Top Skills to Learn This Year',
    date: 'February 22, 2025',
    author: 'Laurel Team',
  },
  {
    image: 'https://picsum.photos/seed/laurel-blog3/600/400',
    title: 'How to Stay Motivated While Studying',
    date: 'March 10, 2025',
    author: 'Laurel Team',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-heading sm:text-4xl">
            Latest From Our Blog
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="overflow-hidden rounded-[10px] bg-white shadow-lg transition-shadow hover:shadow-xl"
            >
              <img src={post.image} alt={post.title} className="h-52 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-brand-body">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
                    {post.author}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-lg font-semibold text-brand-heading">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
