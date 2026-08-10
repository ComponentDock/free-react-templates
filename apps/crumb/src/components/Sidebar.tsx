import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import { WavyDivider } from './WavyDivider'
import {
  aboutBio,
  aboutHeading,
  aboutPhotoAlt,
  aboutSignature,
  imgUrl,
  latestPosts,
  latestPostsHeading,
  newsletterHeading,
  newsletterPlaceholder,
  newsletterSubmitLabel,
  newsletterSuccess,
  newsletterText,
  popularTags,
  socialLabels,
  socialLinks,
  subscribeHeading,
  tagsHeading,
} from '../data'

function WidgetTitle({ children }: { children: string }) {
  return (
    <>
      <h2 className="font-serif text-xl font-normal text-ink">{children}</h2>
      <WavyDivider />
    </>
  )
}

export function Sidebar() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <aside className="space-y-12">
      {/* About Me */}
      <section aria-label={aboutHeading}>
        <WidgetTitle>{aboutHeading}</WidgetTitle>
        <div className="text-center">
          <img
            src={imgUrl('crumb-about', 200, 200)}
            alt={aboutPhotoAlt}
            className="mx-auto h-[200px] w-[200px] rounded-full object-cover"
          />
          <p className="mt-4 font-serif text-2xl font-light italic text-ink">{aboutSignature}</p>
          <p className="mt-3 text-sm leading-relaxed">{aboutBio}</p>
        </div>
      </section>

      {/* Subscribe & Follow */}
      <section aria-label={subscribeHeading}>
        <WidgetTitle>{subscribeHeading}</WidgetTitle>
        <div className="flex items-center gap-4">
          {socialLinks.map((name) => (
            <a
              key={name}
              href="#home"
              aria-label={socialLabels[name]}
              className="text-ink transition-colors hover:text-primary"
            >
              <BrandIcon name={name} />
            </a>
          ))}
        </div>
      </section>

      {/* Latest Posts */}
      <section aria-label={latestPostsHeading}>
        <WidgetTitle>{latestPostsHeading}</WidgetTitle>
        <ul className="space-y-5">
          {latestPosts.map((post) => (
            <li key={post.seed} className="flex items-start gap-4">
              <img
                src={imgUrl(post.seed, 77, 77)}
                alt=""
                className="h-[77px] w-[77px] shrink-0 object-cover"
              />
              <div>
                <h3 className="font-serif text-[15px] leading-snug text-ink transition-colors hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-1 text-xs text-meta">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Newsletter */}
      <section aria-label={newsletterHeading}>
        <WidgetTitle>{newsletterHeading}</WidgetTitle>
        {subscribed ? (
          <p className="text-sm text-primary" role="status">
            {newsletterSuccess}
          </p>
        ) : (
          <>
            <p className="text-sm leading-relaxed">{newsletterText}</p>
            <form onSubmit={handleSubscribe} className="mt-4 flex">
              <input
                type="email"
                required
                placeholder={newsletterPlaceholder}
                aria-label={newsletterPlaceholder}
                className="h-[50px] w-full flex-1 bg-soft px-4 text-sm text-ink outline-none placeholder:text-meta"
              />
              <button
                type="submit"
                aria-label={newsletterSubmitLabel}
                className="flex h-[50px] w-[50px] shrink-0 items-center justify-center bg-primary text-white transition-colors hover:bg-ink"
              >
                <Send className="h-5 w-5" aria-hidden="true" />
              </button>
            </form>
          </>
        )}
      </section>

      {/* Popular Tags */}
      <section aria-label={tagsHeading}>
        <WidgetTitle>{tagsHeading}</WidgetTitle>
        <ul className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <li key={tag}>
              <a
                href="#home"
                className="inline-block bg-chips px-3 py-1.5 text-[11px] font-medium uppercase tracking-[1px] text-body transition-colors hover:bg-primary hover:text-white"
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
