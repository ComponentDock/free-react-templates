import { FacebookIcon, TwitterIcon, InstagramIcon, DribbbleIcon } from './social-icons'

const socials = [
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'Twitter', href: '#', Icon: TwitterIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'Dribbble', href: '#', Icon: DribbbleIcon },
]

export function TopBar() {
  return (
    <div className="bg-gray-900 text-gray-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-2 sm:flex-row sm:px-6">
        <p className="text-sm">
          <span className="font-medium text-white">Phone no:</span>{' '}
          <a href="tel:+001234567" className="hover:text-white">
            +00 1234 567
          </a>{' '}
          or <span className="font-medium text-white">email us:</span>{' '}
          <a href="mailto:emailsample@email.com" className="hover:text-white">
            emailsample@email.com
          </a>
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-sage-400 hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
