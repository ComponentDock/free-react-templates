export type WorkMode = 'remote' | 'hybrid' | 'office'

export interface JobMode {
  readonly label: string
  readonly variant: WorkMode
}

export interface JobPay {
  readonly amount: string
  readonly suffix: string
}

export interface Job {
  readonly id: string
  readonly company: string
  readonly initials: string
  readonly logoColor: string
  readonly postedLabel: string
  readonly title: string
  readonly href: string
  readonly location: string
  readonly mode: JobMode
  readonly skills: readonly string[]
  readonly pay: JobPay
  readonly contract: string
  readonly initiallySaved: boolean
}

/** The repository's standing attribution line. */
export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/**
 * Pill treatments, named per work mode instead of inline hex pairs: lime for
 * remote, sky for hybrid, warm grey for on-site.
 */
export const MODE_STYLES: Record<WorkMode, string> = {
  remote: 'bg-lime text-lime-ink',
  hybrid: 'bg-hybrid text-hybrid-ink',
  office: 'bg-office text-office-ink',
}

/**
 * Four hiring notices. The initials tile colours are per employer on purpose
 * (teal, violet, burnt orange, forest) so the grid reads as four companies.
 */
export const JOBS: readonly Job[] = [
  {
    id: 'job-senior-product-designer',
    company: 'Tideline',
    initials: 'Td',
    logoColor: '#0e7490',
    postedLabel: 'Posted 2 days ago',
    title: 'Senior Product Designer',
    href: '#job-senior-product-designer',
    location: 'Amsterdam, NL',
    mode: { label: 'Remote in EU', variant: 'remote' },
    skills: ['Design systems', 'Figma', 'B2B SaaS'],
    pay: { amount: '€78k – €95k', suffix: '/ year' },
    contract: 'Full-time',
    initiallySaved: false,
  },
  {
    id: 'job-product-manager-patient-app',
    company: 'Northvale Health',
    initials: 'Nv',
    logoColor: '#7c3aed',
    postedLabel: 'Posted 5 hours ago',
    title: 'Product Manager, Patient App',
    href: '#job-product-manager-patient-app',
    location: 'London, UK',
    mode: { label: 'Hybrid · 2 days', variant: 'hybrid' },
    skills: ['Mobile', 'Healthcare', 'Discovery', 'SQL'],
    pay: { amount: '£70k – £85k', suffix: '/ year' },
    contract: 'Full-time',
    initiallySaved: true,
  },
  {
    id: 'job-ux-writer',
    company: 'Fieldstone Labs',
    initials: 'Fs',
    logoColor: '#c2410c',
    postedLabel: 'Posted 1 week ago',
    title: 'UX Writer (Contract, 6 months)',
    href: '#job-ux-writer',
    location: 'Anywhere',
    mode: { label: 'Fully remote', variant: 'remote' },
    skills: ['Microcopy', 'Content design', 'Fintech'],
    pay: { amount: '$65 – $80', suffix: '/ hour' },
    contract: 'Contract',
    initiallySaved: false,
  },
  {
    id: 'job-junior-ui-designer',
    company: 'Greenpath Energy',
    initials: 'Gp',
    logoColor: '#15803d',
    postedLabel: 'Posted 3 days ago',
    title: 'Junior UI Designer',
    href: '#job-junior-ui-designer',
    location: 'Berlin, DE',
    mode: { label: 'On-site', variant: 'office' },
    skills: ['Visual design', 'Prototyping', 'Climate tech'],
    pay: { amount: '€48k – €56k', suffix: '/ year' },
    contract: 'Full-time',
    initiallySaved: false,
  },
]

/** The demo opens with one job already on the list. */
export function initialSavedIds(): string[] {
  return JOBS.filter((job) => job.initiallySaved).map((job) => job.id)
}
