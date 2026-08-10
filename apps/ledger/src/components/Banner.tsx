import { cn } from '@free-react-templates/ui'
import { bannerPosts, imgUrl } from '../data'

export function Banner() {
  return (
    <section aria-label="Featured story" className="bg-white">
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {bannerPosts.map((post, index) => (
          <div
            key={post.seed}
            role="img"
            aria-label={post.title}
            className={cn(
              'relative h-[400px] bg-cover bg-center lg:h-[810px]',
              index === 0 ? 'lg:w-[36%]' : 'lg:ml-[0.5%] lg:w-[63.5%]',
            )}
            style={{
              backgroundImage: `url(${imgUrl(post.seed, post.width, post.height)})`,
            }}
          >
            <div
              className={cn(
                'absolute bg-white',
                index === 0
                  ? 'inset-x-0 bottom-0 mx-auto max-w-[490px] p-[45px] text-center'
                  : 'right-0 bottom-0 left-[8%] p-[45px] lg:bottom-[-96px] lg:left-[23%] lg:p-[45px_144px_50px_50px]',
              )}
            >
              <a href="#" className="block">
                <h5 className="mb-3 text-[11px] font-bold uppercase tracking-wide text-brand">
                  {post.category}
                </h5>
                <h2 className="font-display text-2xl leading-[1.333] text-ink transition-colors hover:text-brand lg:text-[30px]">
                  {post.title}
                </h2>
                <p className="mt-4 text-[13px] text-meta">{post.meta}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
