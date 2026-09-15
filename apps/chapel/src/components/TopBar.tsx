import { FacebookIcon, GoogleIcon, InstagramIcon, TwitterIcon } from './icons'
import { topBar } from '../data'

export function TopBar() {
  return (
    <div className="hidden bg-nav text-white md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <FacebookIcon className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <TwitterIcon className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Google"
            className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <GoogleIcon className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold">{topBar.upcomingLabel}</span>
          <div className="flex gap-3 text-center">
            <div>
              <span className="block text-lg font-bold">{topBar.countdown.days}</span>
              <span className="text-xs">Days</span>
            </div>
            <div>
              <span className="block text-lg font-bold">{topBar.countdown.hours}</span>
              <span className="text-xs">hours</span>
            </div>
            <div>
              <span className="block text-lg font-bold">{topBar.countdown.mins}</span>
              <span className="text-xs">Mins</span>
            </div>
            <div>
              <span className="block text-lg font-bold">{topBar.countdown.secs}</span>
              <span className="text-xs">secs</span>
            </div>
          </div>
          <a
            href="#"
            className="ml-4 text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {topBar.readmoreLabel}
          </a>
        </div>
        <div className="hidden lg:block">
          <a
            href="#"
            className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {topBar.accountLabel}
          </a>
        </div>
      </div>
    </div>
  )
}
