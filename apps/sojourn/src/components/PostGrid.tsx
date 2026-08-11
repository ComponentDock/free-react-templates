import { MessageCircle } from 'lucide-react'
import { continueReadingLabel, gridLabel, gridPosts, postMetaLabel } from '../data'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { SocialIcons } from './SocialIcons'

export function PostGrid() {
  return (
    <section aria-label={gridLabel} className="bg-white py-14 md:py-[80px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {gridPosts.map((post) => (
            <article
              key={post.seed}
              className={cn('flex flex-col', post.fullWidth && 'md:col-span-2')}
            >
              <a href="#" aria-label={post.title} className="block">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/900/560`}
                  alt=""
                  className="w-full object-cover"
                />
              </a>
              <span className="mt-6 text-[11px] font-bold uppercase tracking-[0.25em] text-brand">
                {post.category}
              </span>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-ink md:text-[28px]">
                <a href="#" className="transition-colors hover:text-brand">
                  {post.title}
                </a>
              </h2>
              <ul
                aria-label={postMetaLabel}
                className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-meta"
              >
                <li>{post.date}</li>
                <li className="flex items-center gap-1">
                  <MessageCircle aria-hidden="true" className="h-3.5 w-3.5" />
                  {post.comments}
                </li>
                <li>
                  <SocialIcons names={['Facebook', 'Twitter', 'Pinterest']} className="gap-3" />
                </li>
              </ul>
              <p className="mt-5 leading-relaxed text-ink/70">{post.excerpt}</p>
              <div className="mt-6">
                <ButtonLink
                  href="#"
                  className="rounded-none px-4 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-brand"
                >
                  {continueReadingLabel}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
