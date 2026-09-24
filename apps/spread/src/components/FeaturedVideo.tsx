import { Play, Eye, ThumbsUp, MessageCircle, Share2 } from 'lucide-react'
import { FacebookIcon, TwitterIcon } from './social-icons'

export function FeaturedVideo() {
  return (
    <div className="bg-white p-6 shadow-sm mb-8">
      <div className="relative mb-6">
        <img
          src="https://picsum.photos/seed/spread-feat/800/450"
          alt="Featured video post"
          className="w-full h-64 md:h-80 object-cover"
          loading="lazy"
        />
        <button
          aria-label="Play featured video"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="w-16 h-16 rounded-full bg-brand/90 flex items-center justify-center text-white hover:bg-brand transition-colors">
            <Play className="w-7 h-7 ml-1" fill="currentColor" />
          </span>
        </button>
      </div>
      <div className="flex items-center gap-3 text-xs text-muted mb-3">
        <span className="bg-brand text-white px-2 py-0.5 rounded text-xs font-medium uppercase">
          Travel
        </span>
        <span>May 8, 2024</span>
      </div>
      <h3 className="text-xl font-bold text-heading mb-3">
        <a href="#" className="hover:text-brand transition-colors">
          A Closer Look At Our Front Porch Items And Modern Living
        </a>
      </h3>
      <p className="text-sm text-muted leading-relaxed mb-4">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium.
      </p>
      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <div className="flex items-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" /> 4.2k
          </span>
          <span className="flex items-center gap-1">
            <ThumbsUp className="w-3.5 h-3.5" /> 312
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="w-3.5 h-3.5" /> 45
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button aria-label="Share" className="text-muted hover:text-brand transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
          <a
            href="#"
            aria-label="Facebook"
            className="text-muted hover:text-brand transition-colors"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-muted hover:text-brand transition-colors"
          >
            <TwitterIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
