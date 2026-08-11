import { useState, type FormEvent } from 'react'
import { ArrowRight, Search } from 'lucide-react'
import {
  authorBio,
  authorRole,
  authorWidgetLabel,
  authorWidgetName,
  categories,
  categoriesTitle,
  emailPlaceholder,
  newsletterTitle,
  popularPosts,
  popularTitle,
  searchLabel,
  searchPlaceholder,
  subscribeError,
  subscribeLabel,
  subscribeSuccess,
} from '../data'
import { Button, cn } from '@free-react-templates/ui'
import { SocialIcons } from './SocialIcons'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Sidebar() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const preventSubmit = (event: FormEvent) => event.preventDefault()

  const handleSubscribe = (event: FormEvent) => {
    event.preventDefault()
    setStatus(EMAIL_PATTERN.test(email) ? 'success' : 'error')
  }

  return (
    <aside aria-label="Sidebar" className="lg:col-span-4">
      <div className="space-y-8">
        <div className="rounded-md border border-soft p-7 md:p-8">
          <form
            onSubmit={preventSubmit}
            className="flex items-center rounded-full border border-soft bg-mist"
          >
            <input
              type="text"
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              className="h-11 min-w-0 flex-1 bg-transparent px-5 text-sm text-ink outline-none placeholder:text-meta"
            />
            <button
              type="submit"
              aria-label={searchLabel}
              className="mr-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-opacity hover:opacity-90"
            >
              <Search aria-hidden="true" className="h-4 w-4" />
            </button>
          </form>
        </div>

        <div className="rounded-md border border-soft p-7 text-center md:p-8">
          <div aria-label={authorWidgetLabel}>
            <img
              src="https://picsum.photos/seed/odyssey-writer/96/96"
              alt=""
              className="mx-auto h-20 w-20 rounded-full object-cover"
            />
            <a href="#">
              <h3 className="mt-4 font-serif text-xl font-semibold text-ink">{authorWidgetName}</h3>
            </a>
            <p className="mt-1 text-xs uppercase tracking-wide text-meta">{authorRole}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">{authorBio}</p>
            <SocialIcons className="mt-5 justify-center text-ink" />
          </div>
        </div>

        <div className="rounded-md border border-soft p-7 md:p-8">
          <h3 className="font-serif text-xl font-semibold text-ink">{popularTitle}</h3>
          <ul className="mt-6 space-y-5">
            {popularPosts.map((post) => (
              <li key={post.seed} className="flex gap-4">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/72/72`}
                  alt=""
                  className="h-16 w-16 shrink-0 rounded-md object-cover"
                />
                <div>
                  <h4 className="font-serif text-base font-semibold leading-snug text-ink">
                    <a href="#" className="transition-colors hover:text-brand">
                      {post.title}
                    </a>
                  </h4>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-meta">{post.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-md border border-soft p-7 md:p-8">
          <h3 className="font-serif text-xl font-semibold text-ink">{categoriesTitle}</h3>
          <ul className="mt-6 space-y-3">
            {categories.map((row) => (
              <li key={row.name}>
                <a
                  href="#"
                  className="flex items-center justify-between rounded-full border border-soft px-5 py-2.5 text-sm text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <span>{row.name}</span>
                  <span>{row.count}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-md border border-soft p-7 md:p-8">
          <h3 className="font-serif text-xl font-semibold text-ink">{newsletterTitle}</h3>
          <form onSubmit={handleSubscribe} className="mt-5" noValidate>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={emailPlaceholder}
              aria-label={emailPlaceholder}
              aria-invalid={status === 'error'}
              className="w-full rounded-full border border-soft px-5 py-3 text-sm text-ink outline-none placeholder:text-meta focus:border-brand"
            />
            <Button
              type="submit"
              className={cn(
                'mt-3 w-full rounded-full border border-brand text-xs font-medium uppercase tracking-wide text-white',
                'transition-colors hover:bg-transparent hover:text-ink',
              )}
            >
              {subscribeLabel}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
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
        </div>
      </div>
    </aside>
  )
}
