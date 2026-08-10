import {
  followerBrandClass,
  followerRows,
  imgUrl,
  recentNews,
  recentNewsTitle,
  reviewCard,
  socialLabels,
  stayConnectTitle,
} from '../data'
import { BrandIcon } from './BrandIcon'
import { MetaRow } from './MetaRow'
import { SectionTitle } from './SectionTitle'

/** Sidebar row 1: STAY CONNECT social rows, RECENT NEWS list, review card. */
export function SidebarOne() {
  return (
    <aside aria-label="Sidebar" className="flex flex-col gap-[30px]">
      <div className="rounded-[3px] bg-white p-[30px] shadow-[1px_1px_4px_rgba(0,0,0,0.1)]">
        <SectionTitle title={stayConnectTitle} />
        <ul className="space-y-3 text-xs text-white">
          {followerRows.map((row) => (
            <li key={row.label}>
              <a
                href="#"
                aria-label={`${socialLabels[row.label]} followers`}
                className={`flex items-center justify-between rounded-[5px] px-5 py-2.5 transition-colors hover:bg-primary ${followerBrandClass[row.brand]}`}
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-[3px] bg-white text-[#111]">
                    <BrandIcon name={row.label} className="h-3 w-3" />
                  </span>
                  <span className="font-bold">{row.count}</span>
                </span>
                <span>followers</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-[3px] bg-white p-[30px] shadow-[1px_1px_4px_rgba(0,0,0,0.1)]">
        <SectionTitle title={recentNewsTitle} />
        <ul className="flex flex-col gap-5">
          {recentNews.map((news) => (
            <li key={news.seed} className="flex gap-4">
              <img
                src={imgUrl(news.seed, 100, 100)}
                alt={news.headline}
                loading="lazy"
                className="h-[100px] w-[100px] shrink-0 object-cover"
              />
              <div>
                <a href="#" className="block">
                  <h5 className="font-heading text-sm font-semibold text-[#111] transition-colors hover:text-primary">
                    {news.headline}
                  </h5>
                </a>
                <div className="mt-2">
                  <MetaRow meta={news.meta} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-[3px] bg-white p-[30px] shadow-[1px_1px_4px_rgba(0,0,0,0.1)]">
        <img
          src={imgUrl(reviewCard.seed, 400, 300)}
          alt={reviewCard.headline}
          loading="lazy"
          className="w-full object-cover"
        />
        <a href="#" className="mt-4 block">
          <h4 className="font-heading text-base font-semibold text-[#111] transition-colors hover:text-primary">
            {reviewCard.headline}
          </h4>
        </a>
        <div className="mt-3">
          <MetaRow meta={reviewCard.meta} />
        </div>
        <a href="#" className="mt-4 block text-sm font-semibold text-linkblue">
          {reviewCard.rating}
        </a>
      </div>
    </aside>
  )
}
