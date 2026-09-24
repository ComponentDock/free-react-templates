import { Eye, ThumbsUp, MessageCircle } from 'lucide-react'

const trendingPosts = [
  {
    image: 'https://picsum.photos/seed/spread-tr1/400/250',
    category: 'Travel',
    title: 'Big Savings On Gas While You Travel',
    date: 'May 5, 2024',
    views: '3.8k',
    likes: '256',
    comments: '34',
  },
  {
    image: 'https://picsum.photos/seed/spread-tr2/400/250',
    category: 'Health',
    title: 'The Health Benefits Of Sunglasses',
    date: 'May 3, 2024',
    views: '2.9k',
    likes: '198',
    comments: '22',
  },
  {
    image: 'https://picsum.photos/seed/spread-tr3/400/250',
    category: 'Lifestyle',
    title: 'American Standards And European Culture',
    date: 'May 1, 2024',
    views: '2.1k',
    likes: '145',
    comments: '18',
  },
]

export function TrendingNow() {
  return (
    <section className="mb-8">
      <h3 className="text-base font-bold text-heading mb-4 pb-2 border-b-2 border-brand">
        Trending Now
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trendingPosts.map((post, i) => (
          <div key={i} className="bg-white shadow-sm overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-44 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-xs text-muted mb-2">
                <span className="text-brand font-medium uppercase">{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h4 className="text-sm font-semibold text-heading leading-snug mb-2">
                <a href="#" className="hover:text-brand transition-colors">
                  {post.title}
                </a>
              </h4>
              <div className="flex items-center gap-3 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3" /> {post.views}
                </span>
                <span className="flex items-center gap-1">
                  <ThumbsUp className="w-3 h-3" /> {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-3 h-3" /> {post.comments}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
