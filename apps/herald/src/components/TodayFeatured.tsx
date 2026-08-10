import { imgUrl, sideNews, todayFeatured, todayFeaturedTitle } from '../data'
import { MetaRow } from './MetaRow'
import { SectionTitle } from './SectionTitle'

/** Main column row 1: TODAY FEATURED card + six side-thumbnail news cards. */
export function TodayFeatured() {
  return (
    <div>
      <div className="mb-[30px] rounded-[3px] bg-white p-[30px] shadow-[1px_1px_4px_rgba(0,0,0,0.1)]">
        <SectionTitle title={todayFeaturedTitle} />
        <img
          src={imgUrl(todayFeatured.seed, 700, 400)}
          alt={todayFeatured.headline}
          loading="lazy"
          className="w-full object-cover"
        />
        <a href="#" className="mt-[30px] block">
          <h3 className="font-heading text-lg font-semibold text-[#111] transition-colors hover:text-primary">
            {todayFeatured.headline}
          </h3>
        </a>
        <div className="mt-3">
          <MetaRow meta={todayFeatured.meta} />
        </div>
        <p className="mt-4 text-sm leading-6 text-[#555]">{todayFeatured.excerpt}</p>
      </div>

      <div className="flex flex-col gap-[30px]">
        {sideNews.map((news) => (
          <article
            key={news.seed}
            className="overflow-hidden rounded-[3px] bg-white shadow-[1px_1px_4px_rgba(0,0,0,0.1)]"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="shrink-0 sm:w-[250px]">
                <img
                  src={imgUrl(news.seed, 250, 250)}
                  alt={news.headline}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center px-[30px] py-8">
                <a href="#" className="block">
                  <h4 className="font-heading text-base font-semibold text-[#111] transition-colors hover:text-primary">
                    {news.headline}
                  </h4>
                </a>
                <div className="mt-3">
                  <MetaRow meta={news.meta} />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
