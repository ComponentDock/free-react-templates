import { Calendar, MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'Those Other College Expenses You Aren\u2019t Thinking About',
    date: 'May 10, 2024',
    comments: 1,
    badge: 'Group Study',
    badgeColor: 'bg-brand-400',
    img: 'https://picsum.photos/seed/sagewell-news1/600/400',
  },
  {
    title: 'How to Balance Academics and Personal Life',
    date: 'May 10, 2024',
    comments: 2,
    badge: 'Hall Life',
    badgeColor: 'bg-accent-400',
    img: 'https://picsum.photos/seed/sagewell-news2/600/400',
  },
]

export function News() {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-navy-800 mb-4">Recent News</h2>
        <p className="text-center text-navy-500 mb-12 max-w-2xl mx-auto">
          Catch up on the latest stories, insights, and updates from our campus community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img src={post.img} alt={post.title} className="w-full h-52 object-cover" />
                <span
                  className={`absolute top-4 left-4 ${post.badgeColor} text-white text-xs font-medium px-3 py-1 rounded-full`}
                >
                  {post.badge}
                </span>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-navy-800 mb-3">{post.title}</h4>
                <div className="flex gap-4 text-sm text-navy-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" /> {post.comments} comment
                    {post.comments !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
