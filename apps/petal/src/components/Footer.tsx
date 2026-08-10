import { BrandIcon, type BrandName } from './BrandIcon'
import { creditLine, creditPrefix, footerColumns } from '../data'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'Pinterest', name: 'pinterest' },
]

export function Footer() {
  return (
    <footer className="bg-night text-gray-300 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {footerColumns.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h3 className="font-display text-base font-semibold uppercase tracking-[0.2em] text-white">
              {column.heading}
            </h3>
            <ul className="mt-5 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-brand dark:text-gray-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="font-display text-base font-semibold uppercase tracking-[0.2em] text-white">
            Follow Us
          </h3>
          <ul className="mt-5 flex items-center gap-2.5">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href="#top"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-xs text-gray-400 sm:flex-row">
          <p>{creditPrefix}</p>
          <p>{creditLine}</p>
        </div>
      </div>
    </footer>
  )
}
