import { MOST_POPULAR, TRENDING_NEWS, type SmallPost } from '../data'
import { Carousel } from './Carousel'

function TrendCard({ title, byline, image }: { title: string; byline: string; image: string }) {
  return (
    <article className="group bg-white shadow-sm">
      <div className="overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h4 className="font-heading text-base font-bold leading-snug text-navy transition-colors group-hover:text-brand">
          {title}
        </h4>
        <p className="mt-1.5 text-xs text-meta">{byline}</p>
      </div>
    </article>
  )
}

function PopularPost({ post }: { post: SmallPost }) {
  return (
    <article className="flex gap-3">
      <img src={post.image} alt="" className="h-16 w-16 shrink-0 object-cover" loading="lazy" />
      <div>
        <h5 className="font-heading text-sm font-bold leading-snug text-white transition-colors hover:text-brand">
          {post.title}
        </h5>
        <p className="mt-1 text-xs text-footertext">{post.byline}</p>
      </div>
    </article>
  )
}

export function TrendingNews() {
  return (
    <section id="blog" aria-label="Trending News" className="bg-surface pb-8 pt-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="mb-6 font-heading text-3xl font-bold text-navy">Trending News</h2>
            <Carousel
              slides={TRENDING_NEWS.map((card) => (
                <TrendCard
                  key={card.title}
                  title={card.title}
                  byline={card.byline}
                  image={card.image}
                />
              ))}
              visibleCount={3}
              regionLabel="Trending news"
              prevLabel="Previous trending stories"
              nextLabel="Next trending stories"
              className="-mx-2"
            />
          </div>
          <aside className="lg:col-span-4">
            <h3 className="mb-5 font-heading text-2xl font-bold text-navy">Most Popular</h3>
            <div className="space-y-4 bg-footer p-5">
              {MOST_POPULAR.map((post) => (
                <PopularPost key={post.title} post={post} />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
