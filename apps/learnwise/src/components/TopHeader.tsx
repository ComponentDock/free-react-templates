import { FacebookIcon, TwitterIcon, InstagramIcon } from './social-icons'

const socials = [
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'Twitter', href: '#', Icon: TwitterIcon },
]

export function TopHeader() {
  return (
    <div className="flex items-center justify-between bg-gray-50 px-4 py-2 text-xs text-gray-400">
      <div className="flex gap-4">
        <a href="tel:+443003030266" className="hover:text-gray-800">
          <span className="font-semibold text-gray-600">Phone:</span> +44 300 303 0266
        </a>
        <a href="mailto:info@learnwise.com" className="hover:text-gray-800">
          <span className="font-semibold text-gray-600">Email:</span> info@learnwise.com
        </a>
      </div>
      <div className="flex items-center gap-2">
        <span>Follow us</span>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="hover:text-gray-800"
          >
            <s.Icon className="h-3 w-3" />
          </a>
        ))}
      </div>
    </div>
  )
}
