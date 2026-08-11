import {
  aboutHeading,
  aboutParagraph,
  sidebarLabel,
  socialLabels,
  socialOrder,
  stayConnectedHeading,
  todaysPick,
  todaysPickHeading,
  topStories,
  topStoriesHeading,
} from '../data'
import { FeaturedPost } from './FeaturedPost'
import { SectionTitle } from './SectionTitle'
import { SmallPostRow } from './SmallPostRow'
import { SocialIcon } from './SocialIcon'

/* Right sidebar (reference `div.post-sidebar-area`): 4 widgets separated by
   2px #f1f1f1 bottom borders — About Atlas, Top Stories (5 small posts),
   Stay Connected (6 circular 36px brand-icon links), Today's Pick. */
export function Sidebar() {
  return (
    <aside aria-label={sidebarLabel} className="space-y-0">
      <section className="border-b-2 border-divider">
        <SectionTitle className="py-3 pl-[30px]">{aboutHeading}</SectionTitle>
        <p className="px-[30px] py-[30px] text-sm text-text-muted">{aboutParagraph}</p>
      </section>

      <section className="border-b-2 border-divider">
        <SectionTitle className="py-3 pl-[30px]">{topStoriesHeading}</SectionTitle>
        <div className="space-y-5 px-[30px] py-[30px]">
          {topStories.map((post) => (
            <SmallPostRow key={post.title} post={post} size="widget" />
          ))}
        </div>
      </section>

      <section className="border-b-2 border-divider">
        <SectionTitle className="py-3 pl-[30px]">{stayConnectedHeading}</SectionTitle>
        <div className="flex justify-between gap-2 px-[30px] py-[30px]">
          {socialOrder.map((name) => (
            <a
              key={name}
              href="#"
              aria-label={socialLabels[name]}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-divider text-text-muted transition-colors hover:border-brand hover:text-brand"
            >
              <SocialIcon name={name} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle className="py-3 pl-[30px]">{todaysPickHeading}</SectionTitle>
        <div className="px-[30px] pt-[30px]">
          <FeaturedPost post={todaysPick} elevated={false} />
        </div>
      </section>
    </aside>
  )
}
