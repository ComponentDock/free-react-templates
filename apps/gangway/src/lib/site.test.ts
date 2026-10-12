import {
  CTA_PRIMARY,
  CTA_SECONDARY,
  DOCK_LABEL,
  DOCK_URL,
  DRAWER_CLOSE_LABEL,
  DOCK_URL as DOCK,
  MENU_LABEL,
  NAV,
  PAGE_TITLE,
  SECTIONS,
  SITE_NAME,
  SUB_PAGES,
  isBranch,
  rowSlug,
  shot,
  submenuLabel,
} from './site'

/** The labels the source template declares, which this page may never reproduce. */
const SOURCE_LABELS = [
  'Home',
  'About',
  'Job Listings',
  'Job Single',
  'Post a Job',
  'Pages',
  'Services',
  'Service Single',
  'Blog Single',
  'Portfolio',
  'Portfolio Single',
  'Testimonials',
  'Frequently Ask Questions',
  'Gallery',
  'Blog',
  'Contact',
  'Log In',
]

/** Every id a section or sub-page renders, i.e. every in-page target that exists. */
const renderedIds = [...SECTIONS, ...SUB_PAGES].map((section) => section.id)

/** Every row of the single navigation model, branches included. */
const allRows = NAV.flatMap((item) => (isBranch(item) ? [item, ...item.items] : [item]))

describe('site — the page’s own identity', () => {
  it('names itself, its title and its one outbound credit', () => {
    expect(SITE_NAME).toBe('Gangway')
    expect(PAGE_TITLE).toBe('Gangway — Centred Menu With Two CTAs Template')
    expect(DOCK_URL).toBe('https://www.componentdock.com/')
    expect(DOCK_LABEL).toBe('Component Dock')
    expect(DOCK).toBe('https://www.componentdock.com/')
  })
})

describe('site — the eight rows of the bar', () => {
  it('keeps the design’s order: four plain rows around two submenu owners, then the two drawer rows', () => {
    expect(NAV).toHaveLength(8)
    expect(NAV.map((item) => item.label)).toEqual([
      'Deck',
      'Crew',
      'Billets',
      'Harbour',
      "Ship's log",
      'Berth',
      'Publish a billet',
      'Sign aboard',
    ])
    expect(NAV.filter(isBranch).map((item) => item.label)).toEqual(['Billets', 'Harbour'])
    expect(NAV.map((item) => isBranch(item))).toEqual([
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      false,
    ])
  })

  it('carries exactly one current row, and the two rows the drawer alone adds', () => {
    expect(NAV.filter((item) => !isBranch(item) && item.current).map((item) => item.href)).toEqual([
      '#deck',
    ])
    expect(NAV.filter((item) => !isBranch(item) && item.drawerOnly).map((item) => item.label)).toEqual(
      ['Publish a billet', 'Sign aboard'],
    )
  })

  it('splits the two submenus into the design’s two and eight rows', () => {
    const branches = NAV.filter(isBranch)

    expect(branches[0]!.items.map((item) => item.label)).toEqual(['Billet detail', 'Post a billet'])
    expect(branches[1]!.items).toHaveLength(8)
    expect(branches[1]!.items.map((item) => item.href)).toEqual([
      '#chandlery',
      '#chandlery-detail',
      '#log-entry',
      '#yard',
      '#yard-detail',
      '#crew-voices',
      '#questions',
      '#dry-dock',
    ])
    // The long label the design lets wrap inside its 200px surface.
    expect(branches[1]!.items.some((item) => item.label.length > 20)).toBe(true)
  })

  it('gives every row a destination that a section actually renders', () => {
    for (const row of allRows) {
      expect(row.href).toMatch(/^#[a-z][a-z-]*$/)
      expect(renderedIds).toContain(row.href.slice(1))
    }
    expect(renderedIds).toContain('deck')
    expect(renderedIds.every((id) => renderedIds.filter((other) => other === id).length === 1)).toBe(
      true,
    )
  })

  it('links both halves of the pair at real targets and never reuses a source label', () => {
    expect(CTA_SECONDARY).toMatchObject({ label: 'Post a billet', href: '#post-billet', icon: 'plus' })
    expect(CTA_PRIMARY).toMatchObject({ label: 'Sign aboard', href: '#aboard', icon: 'lock' })

    for (const row of [...allRows, CTA_SECONDARY, CTA_PRIMARY]) {
      expect(SOURCE_LABELS).not.toContain(row.label)
    }
    expect(allRows.map((row) => row.label)).not.toContain('Brand')
  })
})

describe('site — the eight destinations behind the harbour row', () => {
  it('hangs every sub-page off a section that exists', () => {
    expect(SUB_PAGES).toHaveLength(8)
    for (const page of SUB_PAGES) {
      expect(renderedIds).toContain(page.parent)
    }
    expect(SUB_PAGES.every((page) => page.parent === 'harbour')).toBe(true)
  })

  it('holds one FAQ, one gallery and two forms across the page', () => {
    const withFaq = [...SECTIONS, ...SUB_PAGES].filter((section) => section.faq)
    const withImages = [...SECTIONS, ...SUB_PAGES].filter((section) => section.images)
    const withForm = [...SECTIONS, ...SUB_PAGES].filter((section) => section.form)

    expect(withFaq.map((section) => section.id)).toEqual(['questions'])
    expect(withFaq[0]!.faq).toHaveLength(3)
    expect(withImages.map((section) => section.id)).toEqual(['dry-dock'])
    expect(withImages[0]!.images).toHaveLength(4)
    expect(withForm.map((section) => section.id)).toEqual(['post-billet', 'aboard'])
    expect(withForm.map((section) => section.form!.kind)).toEqual(['billet', 'account'])
    expect(withForm[0]!.form!.fields.at(-1)!.type).toBe('textarea')
  })

  it('describes every card of the list-shaped sections', () => {
    const cards = [...SECTIONS, ...SUB_PAGES].flatMap((section) => section.items ?? [])

    expect(cards.length).toBeGreaterThan(20)
    for (const card of cards) {
      expect(card.title).not.toBe('')
      expect(card.body.length).toBeGreaterThan(20)
    }
    expect(cards.filter((card) => card.image).length).toBeGreaterThan(8)
  })
})

describe('site — the small helpers', () => {
  it('slugs a row label, trimming a leading and a trailing separator', () => {
    expect(rowSlug('Billets')).toBe('billets')
    expect(rowSlug("Ship's log")).toBe('ship-s-log')
    expect(rowSlug('  Wrap  Me  ')).toBe('wrap-me')
  })

  it('builds a deterministic placeholder for a section’s own seed', () => {
    expect(shot('yard-1', 800, 600)).toBe('https://picsum.photos/seed/gangway-yard-1/800/600')
  })

  it('labels a disclosure for both of its states', () => {
    expect(submenuLabel('Harbour', false)).toBe('Show the Harbour submenu')
    expect(submenuLabel('Harbour', true)).toBe('Hide the Harbour submenu')
  })

  it('labels the bar’s two controls for assistive tech', () => {
    expect(MENU_LABEL).toBe('Open the site menu')
    expect(DRAWER_CLOSE_LABEL).toBe('Close the site menu')
  })
})
