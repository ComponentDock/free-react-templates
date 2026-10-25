export type SocialKind = 'linkedin' | 'portfolio' | 'code' | 'writing' | 'calendar' | 'email'

export interface SocialLink {
  kind: SocialKind
  label: string
  href: string
}

export interface Profile {
  name: string
  role: string
  team: string
  since: number
  bio: string
  photo: string
  alt: string
  links: SocialLink[]
}

export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

export const STUDIO = {
  eyebrow: 'The studio',
  title: 'People behind Northfield Design',
}

export const ROSTER: Profile[] = [
  {
    name: 'Ava Lindqvist',
    role: 'Creative Director',
    team: 'Founder',
    since: 2014,
    bio: 'Leads brand strategy and art direction. Spent eight years shaping identities for museums and public spaces.',
    photo: 'https://picsum.photos/seed/nameplate-1/600/720',
    alt: 'Portrait of Ava Lindqvist',
    links: [
      {
        kind: 'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ava-lindqvist',
      },
      {
        kind: 'portfolio',
        label: 'Portfolio website',
        href: 'https://ava-lindqvist.example/',
      },
      { kind: 'email', label: 'Email Ava', href: 'mailto:ava@nameplate.example' },
    ],
  },
  {
    name: 'Daniel Okoro',
    role: 'Lead Front-end Developer',
    team: 'Engineering',
    since: 2017,
    bio: 'Turns design systems into fast, accessible interfaces. Runs our monthly code review sessions.',
    photo: 'https://picsum.photos/seed/nameplate-2/600/720',
    alt: 'Portrait of Daniel Okoro',
    links: [
      {
        kind: 'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/daniel-okoro',
      },
      { kind: 'code', label: 'Code repositories', href: 'https://github.com/daniel-okoro' },
      { kind: 'email', label: 'Email Daniel', href: 'mailto:daniel@nameplate.example' },
    ],
  },
  {
    name: 'Sofia Marin',
    role: 'UX Researcher',
    team: 'Research',
    since: 2019,
    bio: 'Plans interviews and usability tests, then turns what people say into clear product decisions.',
    photo: 'https://picsum.photos/seed/nameplate-3/600/720',
    alt: 'Portrait of Sofia Marin',
    links: [
      {
        kind: 'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/sofia-marin',
      },
      {
        kind: 'writing',
        label: 'Writing and articles',
        href: 'https://sofia-marin.example/writing',
      },
      { kind: 'email', label: 'Email Sofia', href: 'mailto:sofia@nameplate.example' },
    ],
  },
  {
    name: 'Marcus Reyes',
    role: 'Account Manager',
    team: 'Client team',
    since: 2021,
    bio: 'Your first call for timelines, budgets and briefs. Keeps every project on schedule and on scope.',
    photo: 'https://picsum.photos/seed/nameplate-4/600/720',
    alt: 'Portrait of Marcus Reyes',
    links: [
      {
        kind: 'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/marcus-reyes',
      },
      {
        kind: 'calendar',
        label: 'Book a call',
        href: 'mailto:marcus@nameplate.example?subject=Book%20a%20call',
      },
      { kind: 'email', label: 'Email Marcus', href: 'mailto:marcus@nameplate.example' },
    ],
  },
]
