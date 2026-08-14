import { BrandIcon, type Brand } from './BrandIcon'

const socials: { brand: Brand; label: string }[] = [
  { brand: 'facebook', label: 'Facebook' },
  { brand: 'twitter', label: 'Twitter' },
  { brand: 'instagram', label: 'Instagram' },
  { brand: 'youtube', label: 'YouTube' },
]

export function MidBar() {
  return (
    <div className="bg-surface">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <a href="#home" aria-label="Pressroom home" className="flex items-center gap-3">
          <span className="bg-brand px-3 py-2 font-heading text-2xl font-extrabold uppercase tracking-wide text-white">
            Pressroom
          </span>
        </a>
        <div className="hidden items-center gap-3 lg:flex">
          {socials.map(({ brand, label }) => (
            <a
              key={brand}
              href="#social"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-meta shadow-sm transition-colors hover:bg-brand hover:text-white"
            >
              <BrandIcon brand={brand} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
