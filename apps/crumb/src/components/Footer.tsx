import { footerCredit, footerCopyright, socialLabels, socialLinks } from '../data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-[60px] border-t border-chips">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {socialLinks.map((name) => (
            <li key={name}>
              <a
                href="#home"
                className="text-[13px] font-medium uppercase tracking-[2px] text-body transition-colors hover:text-primary"
              >
                {socialLabels[name]}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-chips">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-sm text-meta">
          {`Copyright © ${year} ${footerCopyright} | ${footerCredit}`}
        </p>
      </div>
    </footer>
  )
}
