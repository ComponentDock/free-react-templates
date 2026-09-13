import { Heart, MessageCircle, Play } from 'lucide-react'

interface EpisodeCardProps {
  image: string
  tag: string
  date: string
  title: string
  favorites: number
  comments: number
}

function EpisodeCard({ image, tag, date, title, favorites, comments }: EpisodeCardProps) {
  return (
    <article className="overflow-hidden rounded-lg bg-white">
      {/* Image area */}
      <div className="group relative">
        <img src={image} alt={title} className="aspect-[4/3] w-full object-cover" loading="lazy" />
        {/* Tag pill */}
        <span className="absolute bottom-3 left-3 rounded-full bg-brand px-3 py-1 text-[10px] font-medium uppercase text-white">
          {tag}
        </span>
        {/* Play icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/90 text-white">
            <Play className="h-5 w-5 fill-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <time className="mb-1 block text-xs text-muted-alt">{date}</time>
        <h3 className="mb-3 text-sm font-medium leading-snug text-gray-900">
          <a href="#" className="hover:text-brand">
            {title}
          </a>
        </h3>
        <div className="flex items-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1">
            <Heart className="h-3.5 w-3.5" />
            {favorites.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="h-3.5 w-3.5" />
            {comments} Comments
          </span>
        </div>
      </div>
    </article>
  )
}

const EPISODES: EpisodeCardProps[] = [
  {
    image: 'https://picsum.photos/seed/podlane-show1/600/450',
    tag: 'Music',
    date: '24 September, 2024',
    title: 'The art of sound design in modern podcast production',
    favorites: 2371,
    comments: 88,
  },
  {
    image: 'https://picsum.photos/seed/podlane-show2/600/450',
    tag: 'Experiment',
    date: '24 September, 2024',
    title: 'Exploring new audio technologies for immersive listening',
    favorites: 2371,
    comments: 88,
  },
  {
    image: 'https://picsum.photos/seed/podlane-show3/600/450',
    tag: 'Music',
    date: '24 September, 2024',
    title: 'Behind the scenes of our most popular episode yet',
    favorites: 2371,
    comments: 88,
  },
]

export function Shows() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {EPISODES.map((ep, i) => (
            <EpisodeCard key={i} {...ep} />
          ))}
        </div>
        <div className="text-center">
          <a
            href="#"
            className="inline-block rounded-full bg-brand px-8 py-3 text-sm font-medium uppercase text-white transition-colors hover:bg-brand-hover"
          >
            Browse Shows
          </a>
        </div>
      </div>
    </section>
  )
}
