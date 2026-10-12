import { cn } from '@free-react-templates/ui'

interface LinkColumn {
  title: string
  href: string
  links: string[]
}

const COLUMNS: LinkColumn[] = [
  {
    title: 'Hosting',
    href: '#plans',
    links: [
      'Shared hosting',
      'WordPress hosting',
      'Virtual servers',
      'Cloud servers',
      'Managed Kubernetes',
      'Dedicated servers',
    ],
  },
  {
    title: 'Domain names',
    href: '#home',
    links: [
      'Register a domain',
      'Premium names',
      'Domain transfer',
      'Domain marketplace',
      'DNS management',
    ],
  },
  {
    title: 'For resellers',
    href: '#plans',
    links: ['White-label hosting', 'Reseller API', 'Volume pricing', 'Partner programme'],
  },
  {
    title: 'Help & support',
    href: '#contact',
    links: ['Knowledge base', 'Live chat', 'Service status'],
  },
]

/**
 * The footer's four link columns — six hosting links, five domain links, four
 * reseller links and three support links — with mint titles and white links
 * that turn mint on hover.
 */
export function FooterLinks() {
  return (
    <div className="grid grid-cols-1 gap-x-[30px] min-[576px]:grid-cols-2">
      {COLUMNS.map((column, index) => (
        <div
          key={column.title}
          className={cn(
            'max-[575px]:mb-[60px] max-[575px]:last:mb-0',
            index < 2 && 'min-[992px]:mb-[45px]',
          )}
        >
          <h3 className="text-[20px] font-bold text-mint">{column.title}</h3>
          <ul className="mt-[36px] flex flex-col gap-[14px]">
            {column.links.map((link) => (
              <li key={link}>
                <a
                  href={column.href}
                  className="text-[15px] text-white transition-colors hover:text-mint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
