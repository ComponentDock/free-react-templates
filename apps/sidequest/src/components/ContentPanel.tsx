import { X } from 'lucide-react'
import PostRow from './PostRow'

const posts = [
  {
    title: "How the gut microbes you're born with affect your lifelong health",
    date: 'Dec 17, 2019',
    avatarSeeds: ['sq-a1', 'sq-a2', 'sq-a3', 'sq-a4'],
  },
  {
    title: "How the gut microbes you're born with affect your lifelong health",
    date: 'Dec 17, 2019',
    avatarSeeds: ['sq-a5', 'sq-a6', 'sq-a7', 'sq-a8'],
  },
  {
    title: "How the gut microbes you're born with affect your lifelong health",
    date: 'Dec 17, 2019',
    avatarSeeds: ['sq-a9', 'sq-a10', 'sq-a11', 'sq-a12'],
  },
  {
    title: "How the gut microbes you're born with affect your lifelong health",
    date: 'Dec 17, 2019',
    avatarSeeds: ['sq-a13', 'sq-a14', 'sq-a15', 'sq-a16'],
  },
]

export interface ContentPanelProps {
  onClose: () => void
}

export default function ContentPanel({ onClose }: ContentPanelProps) {
  return (
    <div className="bg-content-bg min-h-screen flex flex-col relative">
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
      >
        <X size={24} />
      </button>
      <div className="flex-1 px-6 py-8">
        {posts.map((post, i) => {
          const seed: string = post.avatarSeeds[i] as string
          return <PostRow key={i} title={post.title} date={post.date} avatarSeed={seed} />
        })}
      </div>
    </div>
  )
}
