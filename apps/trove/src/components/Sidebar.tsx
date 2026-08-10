import { about, categories, popularPosts, socialLabels, socialLinks, tags } from '../data'
import { BrandIcon } from './BrandIcon'

function WidgetTitle({ children }: { children: string }) {
  return (
    <h2 className="border-b border-muted/40 pb-3 font-display text-base font-medium text-white">
      {children}
    </h2>
  )
}

export function Sidebar() {
  return (
    <aside aria-label="Sidebar" className="mt-16 space-y-6 lg:mt-0">
      <section className="border border-gray-200 bg-widget p-7">
        <WidgetTitle>About</WidgetTitle>
        <img
          src={about.avatar}
          alt={about.name}
          loading="lazy"
          className="mt-6 h-24 w-24 rounded-full object-cover"
        />
        <h3 className="mt-4 font-display text-base font-medium text-white">{about.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{about.bio}</p>
        <ul className="mt-5 flex gap-3" aria-label="Author social links">
          {socialLinks.map((name) => (
            <li key={name}>
              <a
                href="#home"
                aria-label={socialLabels[name]}
                className="flex h-9 w-9 items-center justify-center text-white transition-colors hover:brand-gradient"
              >
                <BrandIcon name={name} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-gray-200 bg-widget p-7">
        <WidgetTitle>Popular Posts</WidgetTitle>
        <ul className="mt-5 space-y-4">
          {popularPosts.map((post) => (
            <li
              key={post.seed}
              className="flex items-center gap-4 border-b border-muted/40 pb-4 last:border-b-0 last:pb-0"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/80/80`}
                alt=""
                loading="lazy"
                className="h-16 w-16 shrink-0 object-cover"
              />
              <div>
                <a
                  href="#home"
                  className="block text-sm leading-snug font-medium text-white transition-colors hover:text-brand"
                >
                  {post.title}
                </a>
                <p className="mt-1 text-[11px] tracking-widest text-muted uppercase">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-gray-200 bg-widget p-7">
        <WidgetTitle>Post Categories</WidgetTitle>
        <ul className="mt-5 space-y-2.5">
          {categories.map((category) => (
            <li key={category.name}>
              <a
                href="#home"
                className="flex items-center justify-between text-sm text-muted transition-colors hover:text-white"
              >
                {category.name}
                <span>{category.count}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-gray-200 bg-widget p-7">
        <WidgetTitle>Post Tags</WidgetTitle>
        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <a
                href="#home"
                className="inline-block bg-muted/30 px-2.5 py-1.5 text-xs font-light text-muted transition-colors hover:brand-gradient hover:text-white"
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
