import { Globe, HelpCircle, Home, LayoutGrid, Mail } from 'lucide-react'

const railLinks = [
  { label: 'Home', href: '#home', Icon: Home },
  { label: 'Portfolio', href: '#portfolio', Icon: LayoutGrid },
  { label: 'Help', href: '#contact', Icon: HelpCircle },
  { label: 'Globe', href: 'https://www.componentdock.com', Icon: Globe },
  { label: 'Mail', href: 'mailto:hello@gallery.dev', Icon: Mail },
] as const

export function UtilityRail() {
  return (
    <aside
      aria-label="Utility rail"
      className="fixed right-3 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-2"
    >
      {railLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-700 shadow-sm transition-colors hover:bg-primary-500 hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-primary-500 dark:hover:text-white"
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </a>
      ))}
    </aside>
  )
}
