import { Calendar, User, MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'How to Start Your Fitness Journey',
    excerpt: 'A beginner guide to building healthy habits and staying motivated.',
    date: 'Jan 15, 2025',
    author: 'Coach Oscar',
    comments: 12,
    img: 'piston-blog1',
  },
  {
    title: 'Nutrition Tips for Muscle Growth',
    excerpt: 'What to eat before and after your workouts for maximum results.',
    date: 'Feb 22, 2025',
    author: 'Coach Leonard',
    comments: 8,
    img: 'piston-blog2',
  },
  {
    title: 'The Power of Recovery Days',
    excerpt: 'Why rest is just as important as training for your progress.',
    date: 'Mar 10, 2025',
    author: 'Coach James',
    comments: 15,
    img: 'piston-blog3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-2 text-3xl font-bold text-dark">Recent From Our Blog</h2>
        <p className="mb-12 text-mist">Stay updated with the latest fitness insights</p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <div key={p.title} className="overflow-hidden rounded bg-white text-left shadow">
              <img
                src={`https://picsum.photos/seed/${p.img}/400/250`}
                alt={p.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <div className="mb-3 flex items-center gap-4 text-xs text-mist">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {p.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    {p.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={12} />
                    {p.comments}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-dark">{p.title}</h3>
                <p className="text-sm text-mist">{p.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
