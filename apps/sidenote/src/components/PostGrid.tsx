import { cn } from '@free-react-templates/ui'
import { PostCard } from './PostCard'

const POSTS = [
  {
    title: 'How the gut microbes you are born with affect your lifelong health',
    date: 'Dec 17, 2019',
    seed: 'sn-post-1',
  },
  {
    title: 'How the gut microbes you are born with affect your lifelong health',
    date: 'Dec 17, 2019',
    seed: 'sn-post-2',
  },
  {
    title: 'How the gut microbes you are born with affect your lifelong health',
    date: 'Dec 17, 2019',
    seed: 'sn-post-3',
  },
  {
    title: 'How the gut microbes you are born with affect your lifelong health',
    date: 'Dec 17, 2019',
    seed: 'sn-post-4',
  },
]

interface PostGridProps {
  className?: string
}

export function PostGrid({ className }: PostGridProps) {
  return (
    <div className={cn('grid grid-cols-1 gap-6 md:grid-cols-2', className)}>
      {POSTS.map((post) => (
        <PostCard key={post.seed} title={post.title} date={post.date} seed={post.seed} />
      ))}
    </div>
  )
}
