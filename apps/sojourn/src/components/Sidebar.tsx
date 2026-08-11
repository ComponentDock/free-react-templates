import { useState, type FormEvent } from 'react'
import {
  adAlt,
  adLabel,
  aboutBio,
  aboutName,
  aboutRole,
  aboutWidgetLabel,
  emailPlaceholder,
  instagramTileLabel,
  instagramTitle,
  newsletterTagline,
  newsletterTitle,
  recentPosts,
  recentPostsTitle,
  sidebarInstaCount,
  subscribeError,
  subscribeLabel,
  subscribeSuccess,
} from '../data'
import { Button } from '@free-react-templates/ui'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Sidebar() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubscribe = (event: FormEvent) => {
    event.preventDefault()
    setStatus(EMAIL_PATTERN.test(email) ? 'success' : 'error')
  }

  return (
    <aside aria-label="Sidebar" className="space-y-10 text-center">
      {/* About me */}
      <section aria-label={aboutWidgetLabel} className="border border-hairline p-8">
        <img
          src="https://picsum.photos/seed/sojourn-writer/120/120"
          alt=""
          className="mx-auto h-24 w-24 rounded-full object-cover"
        />
        <h3 className="mt-5 font-serif text-xl font-semibold text-ink">{aboutName}</h3>
        <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-meta">{aboutRole}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink/70">{aboutBio}</p>
      </section>

      {/* Newsletter */}
      <section aria-label={newsletterTitle} className="border border-hairline p-8">
        <h3 className="font-serif text-xl font-semibold text-ink">{newsletterTitle}</h3>
        <p className="mt-2 text-sm text-meta">{newsletterTagline}</p>
        <form onSubmit={handleSubscribe} className="mt-5" noValidate>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={emailPlaceholder}
            aria-label={emailPlaceholder}
            aria-invalid={status === 'error'}
            className="w-full border border-soft bg-white px-4 py-2.5 text-sm text-ink outline-none placeholder:text-meta focus:border-brand"
          />
          <Button
            type="submit"
            className="mt-3 w-full rounded-none text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-brand"
          >
            {subscribeLabel}
          </Button>
          {status === 'success' && (
            <p role="status" className="mt-3 text-sm text-brand">
              {subscribeSuccess}
            </p>
          )}
          {status === 'error' && (
            <p role="alert" className="mt-3 text-sm text-red-600">
              {subscribeError}
            </p>
          )}
        </form>
      </section>

      {/* Instagram feed */}
      <section aria-label={instagramTitle} className="border border-hairline p-8">
        <h3 className="font-serif text-xl font-semibold text-ink">{instagramTitle}</h3>
        <ul className="mt-6 grid grid-cols-3 gap-2">
          {Array.from({ length: sidebarInstaCount }, (_, index) => (
            <li key={index}>
              <a href="#" className="group relative block overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/sojourn-insta-${index + 1}/106/106`}
                  alt={instagramTileLabel(index)}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:skew-x-[5deg]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Recent posts */}
      <section aria-label={recentPostsTitle} className="border border-hairline p-8 text-left">
        <h3 className="text-center font-serif text-xl font-semibold text-ink">
          {recentPostsTitle}
        </h3>
        <ul className="mt-6 space-y-5">
          {recentPosts.map((post) => (
            <li key={post.seed} className="flex gap-4">
              <img
                src={`https://picsum.photos/seed/${post.seed}/100/100`}
                alt=""
                className="h-[100px] w-[100px] shrink-0 object-cover"
              />
              <div>
                <h4 className="text-sm font-semibold leading-snug text-ink">
                  <a href="#" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h4>
                <p className="mt-1 text-[11px] text-meta">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Ad widget */}
      <section
        aria-label={adLabel}
        className="flex min-h-[120px] items-center justify-center border border-dashed border-soft bg-mist"
      >
        <img src="https://picsum.photos/seed/sojourn-ad/300/120" alt={adAlt} className="w-full" />
      </section>
    </aside>
  )
}
