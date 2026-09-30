import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { followLinks, popularPosts, vote } from '../data'
import { BrandIcon } from './BrandIcon'
import { SectionTitle } from './SectionTitle'

const tagStyles: Record<string, string> = {
  Tennis: 'bg-[#0054a6]',
  Football: 'bg-[#e3ce1e] text-ink',
}

/** Popular post + Follow Us + Vote (reference `.popular-section`):
 *  overlay photo cards with sport-tag accents on the left, social follow
 *  rows and a controlled radio poll on the right. */
export function PopularSection() {
  const [choice, setChoice] = useState<string | null>(null)

  return (
    <section id="popular" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionTitle>Popular Post</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2">
            {popularPosts.map((post) => (
              <article key={post.title} className="relative h-[240px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent"
                  aria-hidden="true"
                />
                <span
                  className={cn(
                    'absolute left-4 top-4 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-white',
                    tagStyles[post.tag] ?? 'bg-brand',
                  )}
                >
                  {post.tag}
                </span>
                <div className="absolute inset-x-4 bottom-4">
                  <h5 className="text-base font-medium text-white">{post.title}</h5>
                  <p className="mt-1 text-xs text-white/70">
                    {post.author}
                    <span className="mx-1.5">|</span>
                    {post.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-10">
          <div>
            <SectionTitle>Follow Us</SectionTitle>
            <ul className="space-y-3">
              {followLinks.map((row) => (
                <li key={row.label}>
                  <a
                    href="#popular"
                    aria-label={row.label}
                    className="flex items-center gap-4 px-4 py-3 text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: row.bg }}
                  >
                    <BrandIcon name={row.name} className="h-5 w-5" />
                    <span className="flex-1 text-sm font-medium uppercase tracking-wide">
                      {row.label}
                    </span>
                    <span className="text-sm">{row.count}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionTitle>Vote</SectionTitle>
            <div className="relative h-[290px] overflow-hidden">
              <img
                src={vote.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
              <div className="relative p-6">
                <h5 className="text-lg font-bold text-white">{vote.question}</h5>
                <div role="radiogroup" aria-label={vote.question} className="mt-4 space-y-3">
                  {vote.options.map((option) => (
                    <label key={option} className="flex cursor-pointer items-center gap-3">
                      <input
                        type="radio"
                        name="winner"
                        value={option}
                        checked={choice === option}
                        onChange={() => setChoice(option)}
                        className="sr-only"
                      />
                      <span
                        className={cn(
                          'flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white',
                          choice === option && 'bg-white',
                        )}
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium text-white">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
