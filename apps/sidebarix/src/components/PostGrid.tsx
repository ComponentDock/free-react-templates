import { cn } from '@free-react-templates/ui'
import { PostCard } from './PostCard'

interface PostGridProps {
  className?: string
}

const POSTS = [
  {
    title: 'Morning Light at the Park',
    date: 'Sep 15, 2026',
    image: 'https://picsum.photos/seed/post1/120/120',
  },
  {
    title: 'Urban Architecture Series',
    date: 'Sep 12, 2026',
    image: 'https://picsum.photos/seed/post2/120/120',
  },
  {
    title: 'Portrait Session with Alex',
    date: 'Sep 10, 2026',
    image: 'https://picsum.photos/seed/post3/120/120',
  },
  {
    title: 'Sunset Over the Harbor',
    date: 'Sep 8, 2026',
    image: 'https://picsum.photos/seed/post4/120/120',
  },
  {
    title: 'Street Photography Tips',
    date: 'Sep 5, 2026',
    image: 'https://picsum.photos/seed/post5/120/120',
  },
  {
    title: 'Behind the Lens: My Gear',
    date: 'Sep 3, 2026',
    image: 'https://picsum.photos/seed/post6/120/120',
  },
  {
    title: 'Nature Walk in Autumn',
    date: 'Sep 1, 2026',
    image: 'https://picsum.photos/seed/post7/120/120',
  },
  {
    title: 'City Nights in Black and White',
    date: 'Aug 28, 2026',
    image: 'https://picsum.photos/seed/post8/120/120',
  },
]

export function PostGrid({ className }: PostGridProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2', className)}>
      {POSTS.map((post) => (
        <PostCard key={post.title} title={post.title} date={post.date} image={post.image} />
      ))}
    </div>
  )
}
