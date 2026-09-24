import { Eye, ThumbsUp, MessageCircle } from 'lucide-react'

const mostViewedVideos = [
  {
    image: 'https://picsum.photos/seed/spread-mv1/400/250',
    title: 'Dentists Are Smiling Over Painless Veneer Alternative',
    views: '6.8k',
    likes: '412',
    comments: '56',
  },
  {
    image: 'https://picsum.photos/seed/spread-mv2/400/250',
    title: 'Become A Travel Pro In One Easy Lesson',
    views: '5.5k',
    likes: '367',
    comments: '42',
  },
  {
    image: 'https://picsum.photos/seed/spread-mv3/400/250',
    title: 'From Wetlands To Canals And Dams Amsterdam Is Alive',
    views: '4.9k',
    likes: '298',
    comments: '38',
  },
]

export function MostViewedVideos() {
  return (
    <section className="mb-8">
      <h3 className="text-base font-bold text-heading mb-4 pb-2 border-b-2 border-brand">
        Most Viewed Videos
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mostViewedVideos.map((video, i) => (
          <div key={i} className="bg-white shadow-sm overflow-hidden">
            <img
              src={video.image}
              alt={video.title}
              className="w-full h-44 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h4 className="text-sm font-semibold text-heading leading-snug mb-2">
                <a href="#" className="hover:text-brand transition-colors">
                  {video.title}
                </a>
              </h4>
              <div className="flex items-center gap-3 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3" /> {video.views}
                </span>
                <span className="flex items-center gap-1">
                  <ThumbsUp className="w-3 h-3" /> {video.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-3 h-3" /> {video.comments}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
