import { featured, imgUrl } from '../data'
import { ReadMore } from './ReadMore'
import { TopMeta } from './TopMeta'

/** Split feature: full-height photo left, white content panel right. */
export function FeaturedSplit() {
  return (
    <section className="featured-section relative bg-white">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 hidden w-[calc(50%-156px)] bg-cover bg-center lg:block"
        style={{ backgroundImage: `url(${imgUrl(featured.seed, 900, 700)})` }}
      />
      <div
        aria-hidden="true"
        className="h-[300px] w-full bg-cover bg-center lg:hidden"
        style={{ backgroundImage: `url(${imgUrl(featured.seed, 900, 700)})` }}
      />
      <div className="mx-auto max-w-[1200px]">
        <div className="ml-auto w-full bg-white px-[30px] py-16 lg:w-[calc(50%+156px)] lg:p-[100px_50px_130px_79px]">
          <div className="max-w-[810px]">
            <TopMeta date={featured.date} category={featured.category} dark />
            <h3 className="text-[40px] leading-[1.1] font-medium text-[#111] lg:text-[60px]">
              {featured.title}
            </h3>
            <p className="mt-10 mb-10 text-[16px] leading-relaxed text-muted">{featured.excerpt}</p>
            <ReadMore dark />
          </div>
        </div>
      </div>
    </section>
  )
}
