import { ArrowRight, MessageCircle, Music, Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import {
  audioLabel,
  blogExcerpt,
  quoteAuthor,
  readMoreLabel,
  videoLabel,
  type BlogPost,
} from '../data'

/* Card media area, by post variant:
   - image: full-width photo that scales 1 → 1.1 on card hover
   - video: 300px bg image + centered 90px white circular play button
   - quote: #fafafa blockquote (Tenor Sans) + attribution
   - audio: audio area above the description
   - gallery: two side-by-side image tiles */
function MediaArea({ post }: { post: BlogPost }) {
  switch (post.type) {
    case 'video':
      return (
        <div className="relative h-[300px] overflow-hidden">
          <img
            src={`https://picsum.photos/seed/${post.seed}/600/300`}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/70" />
          <button
            type="button"
            aria-label={videoLabel}
            className="absolute left-1/2 top-1/2 flex h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-[0_14px_30px_-15px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:scale-110"
          >
            <Play aria-hidden="true" className="h-10 w-10 fill-current" />
          </button>
        </div>
      )
    case 'quote':
      return (
        <blockquote className="bg-surface px-5 py-5 font-serif text-xl leading-relaxed text-gray-600">
          {post.title}
          <p className="mt-2 text-sm not-italic text-muted">{quoteAuthor}</p>
        </blockquote>
      )
    case 'audio':
      return (
        <div
          aria-label={audioLabel}
          className="flex h-[180px] items-center justify-center bg-border-soft"
        >
          <Music aria-hidden="true" className="h-10 w-10 text-muted" />
        </div>
      )
    case 'gallery':
      return (
        <div className="grid grid-cols-2">
          <img
            src={`https://picsum.photos/seed/${post.seed}-a/400/400`}
            alt=""
            className="h-[250px] w-full object-cover"
          />
          <img
            src={`https://picsum.photos/seed/${post.seed}-b/400/400`}
            alt=""
            className="h-[250px] w-full object-cover"
          />
        </div>
      )
    default:
      return (
        <img
          src={`https://picsum.photos/seed/${post.seed}/600/400`}
          alt=""
          className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )
  }
}

/* Blog entry card (.blog-entry) — white, radius 2px, centered; image
   variants scale the photo on hover. */
export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group overflow-hidden rounded-[2px] bg-white text-center shadow-sm transition-shadow hover:shadow-md">
      <MediaArea post={post} />
      <div className="px-[30px] py-10">
        {post.type !== 'quote' && <h3 className="font-serif text-2xl text-ink">{post.title}</h3>}
        <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-meta">
          <MessageCircle aria-hidden="true" className="h-3.5 w-3.5" />
          {post.meta}
        </p>
        {post.type === 'image' && (
          <p className="mt-4 text-sm leading-relaxed text-muted">{blogExcerpt}</p>
        )}
        <ButtonLink href="#" variant="primary" className="mt-6 rounded-full px-5">
          {readMoreLabel}
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </ButtonLink>
      </div>
    </article>
  )
}
