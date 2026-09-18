import { FacebookIcon, TwitterIcon, DribbbleIcon } from './BrandIcons'

export function TopMenu() {
  return (
    <div className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-[1170px] items-center justify-between px-4 py-2">
        <ul className="flex gap-4">
          <li>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 transition-colors hover:text-accent"
            >
              <FacebookIcon size={14} />
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 transition-colors hover:text-accent"
            >
              <TwitterIcon size={14} />
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Dribbble"
              className="text-gray-400 transition-colors hover:text-accent"
            >
              <DribbbleIcon size={14} />
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <select
            aria-label="Language selector"
            className="rounded border border-border px-2 py-1 text-xs"
          >
            <option>English</option>
            <option>Bangla</option>
            <option>Indian</option>
            <option>Aus</option>
          </select>
          <a
            href="#"
            className="rounded border border-accent bg-accent px-5 py-1 text-xs font-medium text-white transition-colors hover:bg-transparent hover:text-dark"
          >
            Free Quote!
          </a>
        </div>
      </div>
    </div>
  )
}
