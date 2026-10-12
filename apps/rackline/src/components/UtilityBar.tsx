import { Headphones, Mail, MessagesSquare, type LucideIcon } from 'lucide-react'
import { Wordmark } from './Wordmark'

interface ContactBlock {
  icon: LucideIcon
  label: string
  value: string
  href: string
}

const CONTACT_BLOCKS: ContactBlock[] = [
  {
    icon: Headphones,
    label: '24/7 Support',
    value: '+1 (800) 441-2200',
    href: 'tel:+18004412200',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@rackline.example',
    href: 'mailto:hello@rackline.example',
  },
  {
    icon: MessagesSquare,
    label: 'Live Chat',
    value: 'Talk to an engineer',
    href: '#contact',
  },
]

/**
 * The white utility strip that sits above the navigation: a 72px bar with the
 * wordmark on the left and three contact blocks (phone, e-mail, live chat) on
 * the right. Below the desktop breakpoint the label/value column is hidden and
 * only the three glyphs remain.
 */
export function UtilityBar() {
  return (
    <div className="bg-surface">
      <div className="mx-auto flex h-[72px] w-full max-w-[1140px] items-center px-[15px] py-2">
        <a
          href="#home"
          aria-label="Rackline home"
          className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
        >
          <Wordmark />
        </a>

        <ul className="ml-auto flex items-center">
          {CONTACT_BLOCKS.map(({ icon: Icon, label, value, href }) => (
            <li key={label}>
              <a
                href={href}
                className="flex items-center gap-3 px-3 text-[0.8rem] leading-tight text-ink transition-colors hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
              >
                <span className="grid h-5 w-5 place-items-center">
                  <Icon
                    aria-hidden="true"
                    className="h-5 w-5 min-[992px]:h-8 min-[992px]:w-8"
                    strokeWidth={1.5}
                  />
                </span>
                <span className="hidden min-[992px]:block">
                  <span className="block text-[0.8rem] tracking-wide text-muted-alt uppercase">
                    {label}
                  </span>
                  <span className="block text-[1rem] font-semibold">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
