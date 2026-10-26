export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/** A post's third row is either a photograph or a link preview — never both. */
export interface PhotoMedia {
  kind: 'photo'
  src: string
  alt: string
}

export interface LinkMedia {
  kind: 'link'
  title: string
  domain: string
  href: string
}

export type PostMedia = PhotoMedia | LinkMedia

/** Which of the two avatar discs an author gets. */
export type AvatarTone = 'teal' | 'violet'

export interface Post {
  id: string
  name: string
  handle: string
  initials: string
  tone: AvatarTone
  time: { label: string; dateTime: string }
  audience: string
  text: string
  big?: boolean
  tag?: string
  media: PostMedia
  stats: { likedBy: string; counts: string }
  like: { count: number; liked: boolean }
  shareUrl: string
}

/**
 * The feed's two posts, verbatim from the reference render — the copy, the two
 * author identities, both engagement lines and the starting likes (248 on the
 * photo post, 1,204 with the second already pressed). The strings above the
 * action bar are frozen: liking and commenting never rewrite them.
 */
export const POSTS = [
  {
    id: 'trail',
    name: 'Noa Tamura',
    handle: '@noatrails',
    initials: 'NT',
    tone: 'teal',
    time: { label: '6 h ago', dateTime: '2026-09-25T08:14' },
    audience: 'Trail Runners Club',
    text: 'Sunrise loop with the Saturday crew: 14 km, 620 m of climbing and exactly one wrong turn. Same time next week, all paces welcome.',
    tag: '#trailrunning',
    media: {
      kind: 'photo',
      src: 'https://picsum.photos/seed/banter-1/900/600',
      alt: 'Four friends with arms around each other watching the sunrise from a hilltop',
    },
    stats: { likedBy: 'Sam, Priya and others liked this', counts: '18 comments · 6 shares' },
    like: { count: 248, liked: false },
    shareUrl: 'https://example.com/posts/48213',
  },
  {
    id: 'library',
    name: 'Leo Brandão',
    handle: '@leobuilds',
    initials: 'LB',
    tone: 'violet',
    time: { label: 'Yesterday', dateTime: '2026-09-24T19:40' },
    audience: 'Public',
    text: 'Shipped my first open-source library today. 300 lines, zero dependencies, and a README I rewrote four times. Thank you to everyone who reviewed the early drafts.',
    big: true,
    media: {
      kind: 'link',
      title: 'tiny-toast: accessible notifications in 2 KB',
      domain: 'code.example.com',
      href: '#',
    },
    stats: { likedBy: 'Ana, Kofi and others liked this', counts: '96 comments · 41 shares' },
    like: { count: 1204, liked: true },
    shareUrl: 'https://example.com/posts/48177',
  },
] as const satisfies readonly Post[]
