import { Button } from '@free-react-templates/ui'
import { cn } from '@free-react-templates/ui'
import { blogPosts, imgUrl, loadMoreLabel } from '../data'

const originalBtnClasses =
  'h-[60px] min-w-[175px] rounded-none border border-line bg-white text-[14px] font-semibold uppercase tracking-[3px] text-ink shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:border-accent hover:bg-accent hover:text-white'

/** Magazine blog list: five posts in an alternating image-left/right layout
 *  (the third spans the full column), each with an absolute date box, tag,
 *  headline, excerpt and author/comment meta, plus a load-more button. */
export function BlogList() {
  return (
    <section aria-label="Latest posts">
      {blogPosts.map((post, index) => {
        const fullWidth = post.fullWidth === true
        const reverse = !fullWidth && index % 2 === 1
        return (
          <article
            key={post.seed}
            aria-label={post.title}
            className={cn(
              'mb-14 gap-6',
              fullWidth ? 'flex flex-col' : 'flex flex-col md:flex-row',
              reverse && 'md:flex-row-reverse',
            )}
          >
            <div className={cn('relative', fullWidth ? 'w-full' : 'md:w-1/2')}>
              <img src={imgUrl(post.seed, 700, 460)} alt="" className="w-full object-cover" />
              <div className="absolute top-[15px] left-[15px] flex flex-col items-center border border-input bg-white px-2 py-5">
                <span className="text-2xl leading-none font-bold text-ink">{post.day}</span>
                <span className="mt-1 text-[11px] uppercase text-meta">{post.month}</span>
              </div>
            </div>
            <div className={cn('flex-1', fullWidth && 'mt-6')}>
              <div aria-hidden="true" className="mb-5 h-[2px] w-[26px] bg-[#c8c8c8]" />
              <p className="text-[11px] font-semibold uppercase tracking-[3px] text-tag">
                {post.tag}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-ink transition-colors hover:text-accent">
                {post.title}
              </h3>
              <p className="mt-4 leading-[2] text-body">{post.excerpt}</p>
              <p className="mt-5 text-[9px] font-semibold uppercase tracking-[3px] text-meta">
                <span className="text-ink">{`By ${post.author}`}</span>
                <span className="ml-[30px]">{post.comments}</span>
              </p>
            </div>
          </article>
        )
      })}
      <div className="text-center">
        <Button type="button" variant="ghost" className={originalBtnClasses}>
          {loadMoreLabel}
        </Button>
      </div>
    </section>
  )
}
