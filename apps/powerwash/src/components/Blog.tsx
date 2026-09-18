import { Calendar, User, MessageCircle } from 'lucide-react'

const posts = [
  {
    img: 'https://picsum.photos/seed/pw-blog-1/600/400',
    date: 'June 14, 2024',
    author: 'Admin',
    comments: 3,
    title: "How Regular Pressure Washing Extends Your Home's Lifespan",
  },
  {
    img: 'https://picsum.photos/seed/pw-blog-2/600/400',
    date: 'May 28, 2024',
    author: 'Admin',
    comments: 5,
    title: '5 Signs Your Driveway Needs Professional Cleaning',
  },
  {
    img: 'https://picsum.photos/seed/pw-blog-3/600/400',
    date: 'April 10, 2024',
    author: 'Admin',
    comments: 2,
    title: "Commercial vs Residential Pressure Washing: What's the Difference?",
  },
]

export function Blog() {
  return (
    <section className="py-16 bg-dark-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest news from our blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${p.img})` }}
              />
              <div className="p-5">
                <div className="flex items-center gap-4 text-xs text-dark-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {p.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} /> {p.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={12} /> {p.comments}
                  </span>
                </div>
                <h3 className="font-bold text-sm leading-snug hover:text-brand-500 cursor-pointer transition-colors">
                  {p.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
