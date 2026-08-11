import { useState, type FormEvent } from 'react'
import { Calendar } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import {
  aboutBlurb,
  aboutTitle,
  authorName,
  authorPortraitAlt,
  copyright,
  emailError,
  emailPlaceholder,
  footerCredit,
  latestPosts,
  latestTitle,
  newsletterBlurb,
  newsletterTitle,
  subscribeLabel,
  subscribeSuccess,
} from '../data'
import { SocialIcons } from './SocialIcons'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/* Footer (#footer, padding 6em 0, white) — three columns: About Me
   (portrait, Tenor Sans author name, blurb, pink social icons), Latest
   Blog (four 80x80 thumb + date + title rows) and Newsletter (rounded
   email input + full-width pink Subscribe button), then the centered
   copyright bar. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!emailPattern.test(email)) {
      setError(emailError)
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer className="bg-white px-4 py-24 text-muted sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        {/* About Me. */}
        <div>
          <h2 className="font-serif text-lg uppercase tracking-widest text-ink">{aboutTitle}</h2>
          <img
            src="https://picsum.photos/seed/clamor-author/200/200"
            alt={authorPortraitAlt}
            className="mt-5 h-24 w-24 rounded-full object-cover"
          />
          <p className="mt-4 font-serif text-lg text-ink">{authorName}</p>
          <p className="mt-2 text-sm leading-relaxed">{aboutBlurb}</p>
          <SocialIcons className="mt-5 text-brand" />
        </div>

        {/* Latest Blog. */}
        <div>
          <h2 className="font-serif text-lg uppercase tracking-widest text-ink">{latestTitle}</h2>
          <ul className="mt-6">
            {latestPosts.map((post) => (
              <li key={post.title} className="mb-8 flex items-start gap-5 last:mb-0">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/80/80`}
                  alt=""
                  className="h-20 w-20 flex-none object-cover"
                />
                <div>
                  <p className="flex items-center gap-1.5 text-[13px] text-date">
                    <Calendar aria-hidden="true" className="h-3 w-3" />
                    {post.date}
                  </p>
                  <h3 className="mt-1.5 font-serif text-lg leading-snug text-latest transition-colors hover:text-brand">
                    <a href="#">{post.title}</a>
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter. */}
        <div>
          <h2 className="font-serif text-lg uppercase tracking-widest text-ink">
            {newsletterTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed">{newsletterBlurb}</p>
          {subscribed ? (
            <p role="status" className="mt-5 font-semibold text-brand">
              {subscribeSuccess}
            </p>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mt-5">
              <label htmlFor="clamor-newsletter-email" className="sr-only">
                {emailPlaceholder}
              </label>
              <input
                id="clamor-newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={emailPlaceholder}
                aria-invalid={error ? true : undefined}
                className="w-full rounded-full border-2 border-black/[0.01] bg-surface px-5 py-3 text-sm text-ink outline-none placeholder:text-gray-400 focus:border-brand"
              />
              {error && (
                <p role="alert" className="mt-2 text-sm text-red-600">
                  {error}
                </p>
              )}
              <Button type="submit" variant="primary" className="mt-4 w-full rounded-full">
                {subscribeLabel}
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Copyright bar. */}
      <div className="mx-auto mt-16 max-w-7xl border-t border-border-soft pt-6 text-center">
        <p className="text-sm text-copyright">{copyright}</p>
        <p className="mt-1 text-sm">{footerCredit}</p>
      </div>
    </footer>
  )
}
