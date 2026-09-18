import { useState } from 'react'
import { Heart } from 'lucide-react'

interface LikeHeartProps {
  initialCount: number
}

export function LikeHeart({ initialCount }: LikeHeartProps) {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(initialCount)
  const [animating, setAnimating] = useState(false)

  const handleClick = () => {
    if (liked) return
    setLiked(true)
    setCount((c) => c + 1)
    setAnimating(true)
    setTimeout(() => setAnimating(false), 600)
  }

  return (
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        onClick={handleClick}
        className="cursor-pointer border-none bg-transparent p-0"
        aria-label={liked ? 'Already liked' : 'Like this post'}
      >
        <Heart
          size={25}
          className={`transition-colors ${
            liked ? 'fill-brand text-brand' : 'text-text-muted'
          } ${animating ? 'animate-[kudospulse_0.6s_ease-out]' : ''}`}
        />
      </button>
      <span className="text-base leading-none text-text-muted">{count}</span>
    </div>
  )
}
