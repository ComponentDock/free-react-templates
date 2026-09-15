import { XIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from './SocialIcons'

export function TopBar() {
  return (
    <div className="bg-topbar py-2">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <a href="#" aria-label="Twitter">
              <XIcon className="h-4 w-4 text-ink" />
            </a>
            <a href="#" aria-label="Facebook">
              <FacebookIcon className="h-4 w-4 text-ink" />
            </a>
            <a href="#" aria-label="Instagram">
              <InstagramIcon className="h-4 w-4 text-ink" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <LinkedinIcon className="h-4 w-4 text-ink" />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm font-semibold text-ink hover:text-brand">
              Sponsor
            </a>
            <a
              href="#"
              className="rounded bg-cta-gold px-4 py-1.5 text-sm font-bold text-white hover:brightness-110"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
