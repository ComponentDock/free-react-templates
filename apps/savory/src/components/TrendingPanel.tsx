import { useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { postImage, trendingPosts } from '../data'

interface TrendingPanelProps {
  open: boolean
  onClose: () => void
}

export function TrendingPanel({ open, onClose }: TrendingPanelProps) {
  useEffect(() => {
    if (!open) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  return (
    <aside
      aria-label="Trending posts panel"
      aria-hidden={!open}
      className={cn(
        'fixed top-0 right-0 z-[90] h-full w-full max-w-md bg-panel shadow-2xl transition-transform duration-300',
        open ? 'translate-x-0' : 'translate-x-full',
      )}
    >
      <div className="flex items-center justify-between px-6 pt-6">
        <h2 className="font-display text-xl font-semibold text-ink">Trending Posts</h2>
        <button
          type="button"
          aria-label="Close trending panel"
          onClick={onClose}
          className="text-ink transition-colors hover:text-brand"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <ul className="mt-6 space-y-5 px-6 pb-10">
        {trendingPosts.map((post) => (
          <li key={post.title} className="flex items-center gap-4">
            <img
              src={postImage(post.seed, 100, 100)}
              alt={post.alt}
              className="h-16 w-16 shrink-0 object-cover"
            />
            <div>
              <p className="text-xs font-semibold text-brand uppercase">{post.tag}</p>
              <a
                href="#posts"
                className="text-sm font-semibold text-ink transition-colors hover:text-brand"
              >
                {post.title}
              </a>
              <p className="text-xs font-semibold text-meta uppercase">
                {post.date} / {post.author}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  )
}
