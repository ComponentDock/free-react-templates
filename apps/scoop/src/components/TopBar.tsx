import { FacebookIcon, TwitterIcon, DribbbleIcon, BehanceIcon } from './social-icons'

const socialLinks = [
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: TwitterIcon, label: 'Twitter' },
  { icon: DribbbleIcon, label: 'Dribbble' },
  { icon: BehanceIcon, label: 'Behance' },
]

export function TopBar() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="bg-section-bg py-2">
      <div className="container mx-auto px-4 flex justify-between items-center text-xs text-gray-400 font-sans">
        <span>{today}</span>
        <ul className="flex gap-3">
          {socialLinks.map(({ icon: Icon, label }) => (
            <li key={label}>
              <a
                href="#"
                aria-label={label}
                className="text-gray-400 hover:text-brand transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
