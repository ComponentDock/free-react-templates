import { contactDetails } from '../data'
import { Wordmark } from './Wordmark'

/** Quiet white footer: wordmark plus a deliberately faint copyright, contact list right. */
export function Footer() {
  return (
    <footer id="contact" className="bg-white px-6 py-[56px] md:px-[62px]">
      <div className="mx-auto flex max-w-[1316px] flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Wordmark tone="dark" />
          <p className="mt-4 text-[12px] text-ink/[0.23]">
            © {new Date().getFullYear()} Modeline. All rights reserved. Made with{' '}
            <a href="https://www.componentdock.com/" className="underline hover:text-ink">
              Component Dock
            </a>
          </p>
        </div>

        <ul className="text-[15px] text-body">
          {contactDetails.map((row) => (
            <li key={row.label}>
              <span className="inline-block w-[75px] text-ink">{row.label}</span>
              {row.value}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
