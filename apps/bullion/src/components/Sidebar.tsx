import {
  bannerHeading,
  bannerLinkLabel,
  popularPosts,
  popularPostsTitle,
  tickerRows,
  imgUrl,
} from '../data'
import { MiniPostRow } from './MiniPostRow'
import { NewsletterForm } from './NewsletterForm'
import { SectionTitle } from './SectionTitle'

/** Right sidebar: solid-accent price ticker, POPULAR POSTS mini list,
    dark-overlay download banner and the newsletter form (reference:
    .list-block.bg-primary / .bg-layer-7 / .nwsltr-primary-1). */
export function Sidebar() {
  return (
    <aside className="lg:pl-10">
      <div className="space-y-12">
        <ul className="bg-accent text-center">
          {tickerRows.map((row) => (
            <li key={row} className="border-b border-white py-[15px] text-sm font-bold text-ink">
              {row}
            </li>
          ))}
        </ul>

        <div>
          <SectionTitle>{popularPostsTitle}</SectionTitle>
          <div className="space-y-5">
            {popularPosts.map((post) => (
              <MiniPostRow key={post.seed} post={post} />
            ))}
          </div>
        </div>

        <div className="relative">
          <img src={imgUrl('bullion-banner-1', 600, 450)} alt="" className="w-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/70 p-6 text-center">
            <h4 className="text-lg font-bold text-white">{bannerHeading}</h4>
            <a
              href="#download"
              className="mt-4 border-b border-accent pb-1 text-sm font-medium text-accent transition-colors hover:text-white"
            >
              {bannerLinkLabel}
            </a>
          </div>
        </div>

        <NewsletterForm />
      </div>
    </aside>
  )
}
