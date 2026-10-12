export interface NavLink {
  label: string
  href: string
}

/** Primary navigation — the `Hosting` entry opens the dropdown instead of navigating. */
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Domain', href: '#plans' },
  { label: 'Hosting', href: '#plans' },
  { label: 'Blog', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

/** The four hosting kinds listed inside the navigation dropdown. */
export const HOSTING_LINKS: NavLink[] = [
  { label: 'Shared Hosting', href: '#plans' },
  { label: 'Dedicated Hosting', href: '#plans' },
  { label: 'Premium Hosting', href: '#plans' },
  { label: 'Cloud Hosting', href: '#plans' },
]

/** The three entries of the dropdown's nested sub-menu. */
export const HOSTING_SUB_LINKS: NavLink[] = [
  { label: 'Uptime Monitor', href: '#why' },
  { label: 'Migration Desk', href: '#why' },
  { label: 'Backup Vault', href: '#why' },
]
