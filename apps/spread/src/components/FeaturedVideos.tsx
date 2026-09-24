import { Eye, ThumbsUp, MessageCircle } from 'lucide-react'

const featuredVideos = [
  {
    image: 'https://picsum.photos/seed/spread-fv1/400/250',
    category: 'Travel',
    title: 'Global Resorts Network Grn Putting Timeshares To Shame',
    views: '5.2k',
    likes: '342',
    comments: '48',
  },
  {
    image: 'https://picsum.photos/seed/spread-fv2/400/250',
    category: 'Lifestyle',
    title: 'A Guide To Rocky Mountain Vacations',
    views: '4.1k',
    likes: '278',
    comments: '35',
  },
  {
    image: 'https://picsum.photos/seed/spread-fv3/400/250',
    category: 'Travel',
    title: 'American Standards And European Culture How To Avoid',
    views: '3.5k',
    likes: '224',
    comments: '28',
  },
  {
    image: 'https://picsum.photos/seed/spread-fv4/400/250',
    category: 'Nature',
    title: 'Mother Earth Hosts Our Travels Safely',
    views: '2.8k',
    likes: '186',
    comments: '22',
  },
]

export function FeaturedVideos() {
  return (
    <section className="mb-8">
      <h3 className="text-base font-bold text-heading mb-4 pb-2 border-b-2 border-brand">
        Featured Videos
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredVideos.map((video, i) => (
          <div key={i} className="bg-white shadow-sm overflow-hidden">
            <div className="relative">
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-44 object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 text-xs text-muted mb-2">
                <span className="text-brand font-medium uppercase">{video.category}</span>
              </div>
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
