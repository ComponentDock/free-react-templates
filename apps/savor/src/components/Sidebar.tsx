import { useState, type FormEvent } from 'react'
import { BrandIcon } from './BrandIcon'
import {
  aboutBlurb,
  aboutHeading,
  aboutPhotoAlt,
  featuredHeading,
  featuredLarge,
  featuredList,
  followHeading,
  imgUrl,
  sidebarCategories,
  socialLabels,
  socialLinks,
  subscribeHeading,
  subscribePlaceholder,
  subscribeSuccess,
  subscribeText,
} from '../data'

function WidgetTitle({ children }: { children: string }) {
  return <h2 className="font-serif text-2xl font-bold text-ink">{children}</h2>
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
        <div className="mt-5 text-center">
          <img
            src={imgUrl('savor-about', 160, 160)}
            alt={aboutPhotoAlt}
            className="mx-auto h-40 w-40 rounded-full object-cover"
          />
          <p className="mt-4 font-serif text-xl italic text-ink">{aboutBlurb}</p>
        </div>
      </section>

      {/* Follow */}
      <section aria-label={followHeading}>
        <WidgetTitle>{followHeading}</WidgetTitle>
        <div className="mt-5 flex items-center gap-4">
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

      {/* Featured Posts */}
      <section aria-label={featuredHeading}>
        <WidgetTitle>{featuredHeading}</WidgetTitle>
        <div className="mt-5">
          <a href="#home" className="group block">
            <img
              src={imgUrl(featuredLarge.seed, 400, 260)}
              alt=""
              className="h-44 w-full object-cover"
            />
            <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-ink transition-colors group-hover:text-primary">
              {featuredLarge.title}
            </h3>
            <p className="mt-1 text-xs font-bold uppercase tracking-[2px] text-primary">
              {featuredLarge.date}
            </p>
          </a>
          <ul className="mt-6 space-y-5">
            {featuredList.map((post) => (
              <li key={post.seed} className="flex items-start gap-4">
                <img
                  src={imgUrl(post.seed, 100, 100)}
                  alt=""
                  className="h-[70px] w-[70px] shrink-0 object-cover"
                />
                <div>
                  <h3 className="font-serif text-[15px] font-bold leading-snug text-ink transition-colors hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[2px] text-meta">
                    {post.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Categories */}
      <section aria-label="Categories">
        <WidgetTitle>Categories</WidgetTitle>
        <ul className="mt-5 space-y-3">
          {sidebarCategories.map((category) => (
            <li key={category.name}>
              <a
                href={`#${category.name.toLowerCase()}`}
                className="flex items-center justify-between border-b border-line pb-3 text-sm font-semibold text-body transition-colors hover:text-primary"
              >
                <span>{category.name}</span>
                <span className="text-xs font-bold text-meta">({category.count})</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Subscribe */}
      <section aria-label={subscribeHeading} id="subscribe">
        <WidgetTitle>{subscribeHeading}</WidgetTitle>
        {subscribed ? (
          <p className="mt-5 text-sm font-semibold text-primary" role="status">
            {subscribeSuccess}
          </p>
        ) : (
          <>
            <p className="mt-5 text-sm leading-relaxed">{subscribeText}</p>
            <form onSubmit={handleSubscribe} className="mt-4 flex">
              <input
                type="email"
                required
                placeholder={subscribePlaceholder}
                aria-label={subscribePlaceholder}
                className="h-[50px] w-full flex-1 border border-line bg-white px-4 text-sm text-ink outline-none placeholder:text-meta focus:border-primary"
              />
              <button
                type="submit"
                className="h-[50px] shrink-0 bg-primary px-6 text-[13px] font-extrabold uppercase tracking-[1px] text-white transition-colors hover:bg-ink"
              >
                {subscribeHeading}
              </button>
            </form>
          </>
        )}
      </section>
    </aside>
  )
}
