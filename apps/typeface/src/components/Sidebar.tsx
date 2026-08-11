import { Search } from 'lucide-react'
import {
  bioName,
  bioSocials,
  bioText,
  categories,
  categoriesHeading,
  imgUrl,
  popularHeading,
  popularPosts,
  postDate,
  readBioLabel,
  sidebarSearchLabel,
  sidebarSearchPlaceholder,
  socialLabels,
  tags,
  tagsHeading,
} from '../data'
import { SocialIcon } from './SocialIcon'

/* Right sidebar (reference `col-lg-4.sidebar`): search box, author bio card
   with the avatar popping over the border, popular posts, categories with
   dotted separators, and the tag cloud. */
export function Sidebar() {
  return (
    <aside className="w-full shrink-0 space-y-10 lg:w-[340px]">
      <div className="relative">
        <Search
          className="absolute top-1/2 right-5 h-4 w-4 -translate-y-1/2 text-body"
          aria-hidden="true"
        />
        <input
          type="search"
          placeholder={sidebarSearchPlaceholder}
          aria-label={sidebarSearchLabel}
          className="w-full border-none bg-input py-4 pr-12 pl-4 text-sm text-ink placeholder:text-body focus:outline-none"
        />
      </div>

      <div className="relative border border-line bg-white px-4 pt-14 pb-5 text-center">
        <img
          src={imgUrl('typeface-4', 200, 200)}
          alt={bioName}
          className="absolute -top-14 left-1/2 h-[100px] w-[100px] -translate-x-1/2 rounded-full border-4 border-white object-cover shadow-[0_10px_30px_-10px_rgba(0,0,0,.4)]"
        />
        <h2 className="font-heading text-xl font-bold text-ink">{bioName}</h2>
        <p className="mt-2 text-sm leading-relaxed text-body">{bioText}</p>
        <a
          href="#"
          className="mt-4 inline-block rounded bg-brand px-5 py-2 text-sm text-white transition-colors hover:bg-brand-hover"
        >
          {readBioLabel}
        </a>
        <ul className="mt-4 flex items-center justify-center gap-4">
          {bioSocials.map((name) => (
            <li key={name}>
              <a
                href="#"
                aria-label={socialLabels[name]}
                className="text-ink transition-colors hover:text-brand"
              >
                <SocialIcon name={name} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <section aria-label={popularHeading}>
        <h3 className="border-b border-line pb-5 font-heading text-lg font-bold text-ink">
          {popularHeading}
        </h3>
        <ul className="mt-5 space-y-5">
          {popularPosts.map((post) => (
            <li key={post.seed}>
              <a href="#" className="group flex gap-4">
                <img
                  src={imgUrl(post.seed, 120, 120)}
                  alt=""
                  className="h-20 w-20 shrink-0 object-cover"
                />
                <span>
                  <span className="font-heading text-lg leading-snug text-ink transition-colors group-hover:text-brand">
                    {post.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{postDate}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label={categoriesHeading}>
        <h3 className="border-b border-line pb-5 font-heading text-lg font-bold text-ink">
          {categoriesHeading}
        </h3>
        <ul className="mt-2">
          {categories.map((category) => (
            <li
              key={category.name}
              className="border-b border-dotted border-[#dee2e6] last:border-b-0"
            >
              <a
                href="#"
                className="group flex items-center justify-between py-2.5 text-base transition-colors hover:text-ink"
              >
                <span>{category.name}</span>
                <span className="text-[#ccc] transition-colors group-hover:text-ink">
                  {category.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label={tagsHeading}>
        <h3 className="border-b border-line pb-5 font-heading text-lg font-bold text-ink">
          {tagsHeading}
        </h3>
        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <a
                href="#"
                className="inline-block border-b border-dotted border-[#ccc] pb-0.5 text-sm text-body transition-colors hover:text-ink"
              >
                {tag}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}
