import { topBarLinks, socials } from '../data'
import { FacebookIcon, TwitterIcon } from './social-icons'

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: <FacebookIcon />,
  Twitter: <TwitterIcon />,
}

export function TopBar() {
  return (
    <div className="top-bar bg-primary py-3 shadow-sm">
      <div className="mx-auto hidden max-w-7xl items-center justify-between px-4 md:flex">
        <nav aria-label="Top bar links">
          <ul className="flex items-center gap-1">
            {topBarLinks.map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="p-3 text-sm font-light text-white transition-colors hover:text-white/80"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          {socials
            .filter((s) => s.name === 'Twitter' || s.name === 'Facebook')
            .map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="text-white transition-colors hover:text-white/80"
              >
                {socialIcons[s.name]}
              </a>
            ))}
        </div>
      </div>
    </div>
  )
}
