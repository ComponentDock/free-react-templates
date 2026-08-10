import { cn } from '@free-react-templates/ui'
import { featuredArticles, imgUrl, type Article } from '../data'
import { StoryMeta } from './StoryMeta'

interface MosaicStoryProps {
  article: Article
  /** Headline size variant: big featured story vs smaller tiles. */
  big?: boolean
  className?: string
}

function MosaicStory({ article, big = false, className }: MosaicStoryProps) {
  return (
    <a href="#story" className={cn('group relative block h-full overflow-hidden', className)}>
      <img
        src={imgUrl(article.seed, big ? 1200 : 600, big ? 800 : 450)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10"
        aria-hidden="true"
      />
      <div className="absolute bottom-0 left-0 p-5 text-white">
        <h3 className={cn('font-bold leading-snug', big ? 'text-xl lg:text-2xl' : 'text-sm')}>
          <span className="transition-colors group-hover:text-accent">{article.headline}</span>
        </h3>
        <StoryMeta
          author={article.author}
          date={article.date}
          views={article.views}
          comments={article.comments}
          light
          className="mt-2"
        />
      </div>
    </a>
  )
}

/** 600px-tall featured-story mosaic: one large story over a two-story
    stack on the top rows, plus a bottom row of three stories. Every tile
    overlays its image with a bottom-up black gradient and white caption
    (reference: .h-600x / .w-2-3 / .w-1-3 / .bg-grad-layer-6). */
export function HeroMosaic() {
  const [big, stackOne, stackTwo, rowTwoA, rowTwoB, rowTwoC] = featuredArticles

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-1 lg:h-[600px] lg:grid-cols-3 lg:grid-rows-3">
        <MosaicStory article={big} big className="h-96 lg:col-span-2 lg:row-span-2 lg:h-auto" />
        <MosaicStory article={stackOne} className="h-64 lg:col-start-3 lg:row-start-1 lg:h-auto" />
        <MosaicStory article={stackTwo} className="h-64 lg:col-start-3 lg:row-start-2 lg:h-auto" />
        <MosaicStory article={rowTwoA} className="h-64 lg:row-start-3 lg:h-auto" />
        <MosaicStory article={rowTwoB} className="h-64 lg:row-start-3 lg:h-auto" />
        <MosaicStory article={rowTwoC} className="h-64 lg:row-start-3 lg:h-auto" />
      </div>
    </div>
  )
}
