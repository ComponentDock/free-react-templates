import {
  commentCount,
  footerAboutHeading,
  footerAboutText,
  footerCopyright,
  footerLatestHeading,
  footerPosts,
  footerSocials,
  imgUrl,
  postDate,
  quickLinks,
  quickLinksHeading,
  readMoreLabel,
  socialHeading,
  socialLabels,
} from '../data'
import { SocialIcon } from './SocialIcon'

/* Dark footer (reference `footer.site-footer`, bg #262626): about column,
   latest post entries, quick links + social, and the copyright bar with an
   original attribution (the ColorLib credit is replaced). */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 bg-footer px-4 py-20 text-white/50">
      <div className="mx-auto grid max-w-[1250px] gap-10 md:grid-cols-2 lg:grid-cols-4">
        <section aria-label={footerAboutHeading}>
          <h3 className="mb-6 font-heading text-sm font-bold tracking-[.2em] text-white uppercase">
            {footerAboutHeading}
          </h3>
          <img src={imgUrl('typeface-13', 400, 260)} alt="" className="w-full object-cover" />
          <p className="mt-4 text-sm leading-relaxed">{footerAboutText}</p>
          <a
            href="#"
            className="mt-3 inline-block text-sm text-white underline-offset-4 hover:underline"
          >
            {readMoreLabel}
          </a>
        </section>

        <section aria-label={footerLatestHeading}>
          <h3 className="mb-6 font-heading text-sm font-bold tracking-[.2em] text-white uppercase">
            {footerLatestHeading}
          </h3>
          <ul className="space-y-5">
            {footerPosts.map((post) => (
              <li key={post.seed}>
                <a href="#" className="group flex gap-4">
                  <img
                    src={imgUrl(post.seed, 120, 120)}
                    alt=""
                    className="h-20 w-20 shrink-0 object-cover"
                  />
                  <span>
                    <span className="font-heading text-lg leading-snug text-white transition-colors group-hover:text-brand-hover">
                      {post.title}
                    </span>
                    <span className="mt-1 block text-sm">
                      {postDate} • {commentCount} comments
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label={quickLinksHeading}>
          <h3 className="mb-6 font-heading text-sm font-bold tracking-[.2em] text-white uppercase">
            {quickLinksHeading}
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-white transition-colors hover:text-brand-hover">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label={socialHeading}>
          <h3 className="mb-6 font-heading text-sm font-bold tracking-[.2em] text-white uppercase">
            {socialHeading}
          </h3>
          <ul className="space-y-2.5">
            {footerSocials.map((name) => (
              <li key={name}>
                <a
                  href="#"
                  aria-label={socialLabels[name]}
                  className="flex items-center gap-3 text-sm text-white transition-colors hover:text-brand-hover"
                >
                  <SocialIcon name={name} className="h-4 w-4" />
                  {socialLabels[name]}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="mx-auto mt-16 max-w-[1250px] border-t border-white/10 pt-8 text-center text-sm">
        <p>{footerCopyright(year)}</p>
      </div>
    </footer>
  )
}
