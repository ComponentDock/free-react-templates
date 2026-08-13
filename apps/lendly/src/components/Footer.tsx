import { Heart } from 'lucide-react'
import { brand, footer } from '../data'

export function Footer() {
  return (
    <footer className="bg-ink pt-[100px]">
      <div className="mx-auto max-w-[1176px] px-4">
        <a
          href="#top"
          className="mb-12 inline-block text-2xl font-bold uppercase tracking-wide text-white"
        >
          {brand}
        </a>
        <div className="grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          {footer.widgets.map((widget) => (
            <div key={widget.title} className="mb-12">
              <h2 className="mb-8 text-lg font-bold text-white">{widget.title}</h2>
              <ul className="space-y-4">
                {widget.links.map((link) => (
                  <li key={link}>
                    <a href="#top" className="inline-block text-sm text-white hover:text-brand">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mb-10 max-w-3xl italic text-muted">{footer.smallPrint}</p>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-5">
          <p className="text-sm text-muted">{footer.copyright}</p>
          <a
            href={footer.creditHref}
            className="inline-flex items-center gap-2 text-sm text-white hover:text-brand"
          >
            <Heart className="h-4 w-4 text-brand" aria-hidden="true" />
            {footer.creditLabel}
          </a>
        </div>
      </div>
    </footer>
  )
}
