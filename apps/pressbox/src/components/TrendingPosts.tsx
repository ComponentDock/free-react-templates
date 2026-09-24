import { Camera, FileText, MessageCircle, Clock } from 'lucide-react'

const trendingPosts = [
  {
    id: 1,
    category: 'News',
    title: 'Economic Report Shows Strongest Growth in a Decade',
    date: 'January 30, 2025',
    comments: 12,
    image: 'https://picsum.photos/seed/pressbox-trend1/400/300',
    icon: Camera,
  },
  {
    id: 2,
    category: 'Lifestyle',
    title: 'The Rise of Sustainable Fashion in Urban Centers',
    date: 'January 29, 2025',
    comments: 8,
    image: 'https://picsum.photos/seed/pressbox-trend2/400/300',
    icon: Camera,
  },
  {
    id: 3,
    category: 'Sport',
    title: 'Olympic Committee Confirms New Host City for 2032',
    date: 'January 28, 2025',
    comments: 24,
    image: 'https://picsum.photos/seed/pressbox-trend3/400/300',
    icon: FileText,
  },
  {
    id: 4,
    category: 'Business',
    title: 'Startup Funding Reaches Record Levels in Q4',
    date: 'January 27, 2025',
    comments: 15,
    image: 'https://picsum.photos/seed/pressbox-trend4/400/300',
    icon: FileText,
  },
]

const recentArticles = [
  {
    id: 5,
    category: 'Fashion',
    title: 'Spring Collections Preview: Bold Colors Dominate Runways',
    date: 'January 26, 2025',
    comments: 6,
    image: 'https://picsum.photos/seed/pressbox-recent1/400/300',
    icon: Camera,
  },
  {
    id: 6,
    category: 'Music',
    title: 'Grammy Nominations Surprise with Indie Artist Picks',
    date: 'January 25, 2025',
    comments: 19,
    image: 'https://picsum.photos/seed/pressbox-recent2/400/300',
    icon: Camera,
  },
  {
    id: 7,
    category: 'News',
    title: 'City Council Approves Major Infrastructure Investment',
    date: 'January 24, 2025',
    comments: 7,
    image: 'https://picsum.photos/seed/pressbox-recent3/400/300',
    icon: FileText,
  },
]

interface ArticleCardProps {
  title: string
  category: string
  date: string
  comments: number
  image: string
  icon: typeof Camera
  size?: 'sm' | 'md'
}

function ArticleCard({
  title,
  category,
  date,
  comments,
  image,
  icon: Icon,
  size = 'sm',
}: ArticleCardProps) {
  const imgHeight = size === 'md' ? 'h-48' : 'h-40'
  return (
    <article className="group">
      <a href="#" className="block overflow-hidden">
        <div className={`relative ${imgHeight} overflow-hidden`}>
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute bottom-2 left-2 rounded bg-brand-dark/70 p-1.5 text-white">
            <Icon size={14} />
          </span>
        </div>
      </a>
      <div className="mt-3">
        <div className="mb-1 flex items-center gap-2 text-xs text-gray-500">
          <span className="font-semibold uppercase text-brand-red">{category}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock size={10} />
            {date}
          </span>
        </div>
        <a
          href="#"
          className="text-sm font-bold leading-snug text-brand-dark transition-colors hover:text-brand-red md:text-base"
        >
          {title}
        </a>
        <div className="mt-1 flex items-center gap-1 text-xs text-gray-400">
          <MessageCircle size={10} />
          {comments}
        </div>
      </div>
    </article>
  )
}

export function TrendingPosts() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-xl font-extrabold uppercase text-brand-dark">Trending Posts</h2>
          <span className="h-0.5 flex-1 bg-brand-grey" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {trendingPosts.map((post) => (
            <ArticleCard key={post.id} {...post} size="md" />
          ))}
        </div>

        <div className="mt-12 mb-8 flex items-center gap-3">
          <h2 className="text-xl font-extrabold uppercase text-brand-dark">Recent Articles</h2>
          <span className="h-0.5 flex-1 bg-brand-grey" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {recentArticles.map((post) => (
            <ArticleCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}
