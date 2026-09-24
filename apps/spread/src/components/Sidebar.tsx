import { Eye, ThumbsUp, MessageCircle } from 'lucide-react'

interface PostCardProps {
  image: string
  title: string
  views: string
  likes: string
  comments: string
}

function PostCard({ image, title, views, likes, comments }: PostCardProps) {
  return (
    <div className="flex gap-3 mb-4">
      <img
        src={image}
        alt={title}
        className="w-20 h-16 object-cover flex-shrink-0"
        loading="lazy"
      />
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-heading leading-snug mb-1">
          <a href="#" className="hover:text-brand transition-colors line-clamp-2">
            {title}
          </a>
        </h4>
        <div className="flex items-center gap-3 text-xs text-muted">
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3" /> {views}
          </span>
          <span className="flex items-center gap-1">
            <ThumbsUp className="w-3 h-3" /> {likes}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="w-3 h-3" /> {comments}
          </span>
        </div>
      </div>
    </div>
  )
}

const popularPosts = [
  {
    image: 'https://picsum.photos/seed/spread-pop1/100/80',
    title: 'Global Travel And Vacations Luxury Travel',
    views: '2.4k',
    likes: '189',
    comments: '24',
  },
  {
    image: 'https://picsum.photos/seed/spread-pop2/100/80',
    title: 'Cruising Destination Ideas For Your Next Trip',
    views: '1.8k',
    likes: '142',
    comments: '18',
  },
  {
    image: 'https://picsum.photos/seed/spread-pop3/100/80',
    title: 'The Luxury Of Traveling With Style',
    views: '1.5k',
    likes: '120',
    comments: '15',
  },
  {
    image: 'https://picsum.photos/seed/spread-pop4/100/80',
    title: 'Choose The Perfect Accommodations',
    views: '1.2k',
    likes: '95',
    comments: '12',
  },
  {
    image: 'https://picsum.photos/seed/spread-pop5/100/80',
    title: 'A Guide To Rocky Mountain Vacations',
    views: '980',
    likes: '78',
    comments: '9',
  },
]

const latestVideos = [
  {
    image: 'https://picsum.photos/seed/spread-lv1/100/80',
    title: 'Coventry City Guide Including Coventry Hotels',
    views: '3.1k',
    likes: '210',
    comments: '32',
  },
  {
    image: 'https://picsum.photos/seed/spread-lv2/100/80',
    title: 'Choose The Perfect Accommodations',
    views: '2.0k',
    likes: '165',
    comments: '21',
  },
  {
    image: 'https://picsum.photos/seed/spread-lv3/100/80',
    title: 'Get Ready Fast For Fall Leaf Viewing',
    views: '1.7k',
    likes: '134',
    comments: '16',
  },
  {
    image: 'https://picsum.photos/seed/spread-lv4/100/80',
    title: 'Global Resorts Network Putting Timeshares To Shame',
    views: '1.3k',
    likes: '102',
    comments: '11',
  },
  {
    image: 'https://picsum.photos/seed/spread-lv5/100/80',
    title: 'Travel Prudently Luggage And Carry On Tips',
    views: '1.1k',
    likes: '88',
    comments: '8',
  },
]

export function Sidebar() {
  return (
    <aside className="space-y-6">
      <div className="bg-white p-6 shadow-sm">
        <h3 className="text-base font-bold text-heading mb-4 pb-2 border-b-2 border-brand">
          Most Popular
        </h3>
        {popularPosts.map((post, i) => (
          <PostCard key={i} {...post} />
        ))}
      </div>

      <div className="bg-gray-100 p-6 text-center text-sm text-muted">
        <p>Advertisement</p>
        <div className="h-40 bg-gray-200 flex items-center justify-center mt-2">
          <span className="text-gray-400">Ad Space</span>
        </div>
      </div>

      <div className="bg-white p-6 shadow-sm">
        <h3 className="text-base font-bold text-heading mb-4 pb-2 border-b-2 border-brand">
          Latest Videos
        </h3>
        {latestVideos.map((post, i) => (
          <PostCard key={i} {...post} />
        ))}
      </div>
    </aside>
  )
}
