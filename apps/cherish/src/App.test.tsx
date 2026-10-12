import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import {
  ALBUM_EYEBROW,
  BRAND,
  COUNTDOWN_EYEBROW,
  DOCK_LABEL,
  DOCK_URL,
  FOOTER_NOTE,
  FOOTER_SOCIALS,
  HERO_NAMES,
  MENU_ID,
  MENU_LINKS,
  MENU_TOGGLE_LABEL,
  MORE_ITEMS,
  NAV_ITEMS,
  PAGE_TITLE,
  PARTNER_SOCIALS,
  RSVP_EYEBROW,
  SCHEDULE_EYEBROW,
  SEARCH_PLACEHOLDER,
  SEARCH_TOGGLE_LABEL,
  SEAT_TARGET,
  SKIP_TARGET,
  STORY_EYEBROW,
  TOP_TARGET,
  VENUE_EYEBROW,
  navDestinations,
  shot,
} from './lib/site'
import { pageClass, skipLinkClass } from './lib/styles'
import { carriesSourceLabel, carriesSourceText } from './test/provenance'

/** Every file that ships with the app, read through Vite so no shell is involved. */
const raw = import.meta.glob(['./**/*.{ts,tsx,css}', '../index.html', '../package.json', '../public/CNAME'], {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const files = Object.entries(raw)

/** The blocks the page materialises below the hero, in the order the design puts them. */
const SECTION_IDS = ['tale', 'countdown', 'portraits', 'schedule', 'seat', 'where']

/** Every label the page itself prints at the top of a block. */
const LABELS = [
  PAGE_TITLE,
  BRAND,
  FOOTER_NOTE,
  MENU_TOGGLE_LABEL,
  SEARCH_TOGGLE_LABEL,
  SEARCH_PLACEHOLDER,
  STORY_EYEBROW,
  COUNTDOWN_EYEBROW,
  ALBUM_EYEBROW,
  SCHEDULE_EYEBROW,
  RSVP_EYEBROW,
  VENUE_EYEBROW,
  ...MENU_LINKS.map((link) => link.label),
]

/** Every destination the page points at, in the order the links stand in the document. */
const HREFS = [
  SKIP_TARGET,
  TOP_TARGET,
  ...NAV_ITEMS.map((item) => item.href),
  MORE_ITEMS[0]?.href as string,
  ...MORE_ITEMS.map((item) => item.href),
  SEAT_TARGET,
  ...PARTNER_SOCIALS.map((social) => social.href),
  ...PARTNER_SOCIALS.map((social) => social.href),
  TOP_TARGET,
  DOCK_URL,
  ...FOOTER_SOCIALS.map((social) => social.href),
]

function anchors(container: HTMLElement): string[] {
  return Array.from(container.querySelectorAll('a')).map(
    (anchor) => anchor.getAttribute('href') as string,
  )
}

describe('App — the whole page', () => {
  it('names the document after the template', () => {
    render(<App />)

    expect(document.title).toBe(PAGE_TITLE)
  })

  it('stands the header in front of the blocks, and the footer behind them', () => {
    const { container } = render(<App />)

    const page = container.querySelector('#top') as HTMLElement

    expect(page.className).toBe(pageClass)
    expect(page.className).toContain('relative')
    expect(Array.from(page.children).map((child) => child.tagName)).toEqual([
      'A',
      'HEADER',
      'MAIN',
      'FOOTER',
    ])

    const skip = screen.getByRole('link', { name: 'Skip to content' })

    expect(skip.className).toBe(skipLinkClass)
    expect(skip).toHaveAttribute('href', SKIP_TARGET)
    expect(container.querySelector(SKIP_TARGET)).not.toBeNull()
  })

  it('runs the blocks below the hero in the design’s own order', () => {
    const { container } = render(<App />)

    const blocks = Array.from(container.querySelectorAll('main > section'))

    expect(blocks[0]).toBe(screen.getByTestId('hero'))
    expect(blocks.slice(1).map((block) => block.id)).toEqual(SECTION_IDS)
    expect(blocks).toHaveLength(SECTION_IDS.length + 1)

    for (const block of blocks) {
      const labelledBy = block.getAttribute('aria-labelledby') as string

      expect(container.querySelector(`#${labelledBy}`)).not.toBeNull()
      expect((block as HTMLElement).style.scrollMarginTop).toBe('150px')
    }

    expect(container.querySelector('footer')).toBe(screen.getByTestId('footer'))
  })

  it('opens on the day itself, with the two names as the page’s only h1', () => {
    render(<App />)

    const headings = screen.getAllByRole('heading', { level: 1 })

    expect(headings).toHaveLength(1)
    expect(headings[0]?.textContent).toBe(HERO_NAMES)
  })

  it('leaves no dead link anywhere on the page', async () => {
    const { container } = render(<App />)

    expect(anchors(container)).toEqual(HREFS)

    for (const href of anchors(container)) {
      expect(href).not.toBe('#')

      if (href.startsWith('#')) {
        expect(container.querySelector(href)).not.toBeNull()
      } else {
        expect(href.startsWith('https://')).toBe(true)
      }
    }

    await userEvent.setup().click(screen.getByRole('button', { name: MENU_TOGGLE_LABEL }))

    const out = anchors(container)

    expect(out.some((href) => href === '#')).toBe(false)
    expect(out.filter((href) => href.startsWith('#'))).toEqual(
      expect.arrayContaining([...navDestinations(), TOP_TARGET]),
    )
  })

  it('folds the whole menu into the header on a narrow screen, and back again', async () => {
    const user = userEvent.setup()

    render(<App />)

    const burger = screen.getByRole('button', { name: MENU_TOGGLE_LABEL })

    expect(screen.queryByTestId('hero')).toBeInTheDocument()
    expect(screen.queryByRole('navigation', { name: 'Every block of the page' })).toBeNull()

    await user.click(burger)

    const panel = screen.getByRole('navigation', { name: 'Every block of the page' })

    expect(panel).toHaveAttribute('id', MENU_ID)
    expect(within(panel).getAllByRole('link').map((link) => link.textContent)).toEqual(
      MENU_LINKS.map((link) => link.label),
    )

    await user.click(burger)

    expect(screen.queryByRole('navigation', { name: 'Every block of the page' })).toBeNull()
  })

  it('covers the page with the search, and takes it down on Escape', async () => {
    const user = userEvent.setup()

    render(<App />)

    expect(screen.queryByRole('dialog')).toBeNull()

    await user.click(screen.getByRole('button', { name: SEARCH_TOGGLE_LABEL }))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(document.activeElement).toBe(screen.getByLabelText(SEARCH_PLACEHOLDER))

    await user.keyboard('{Escape}')

    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('runs the page on the app’s own placeholder pictures', () => {
    const { container } = render(<App />)

    const pictures = Array.from(container.querySelectorAll('img'))

    expect(pictures.length).toBeGreaterThanOrEqual(9)

    for (const picture of pictures) {
      expect(picture.getAttribute('src')).toContain('https://picsum.photos/seed/cherish-')
      expect(picture.getAttribute('alt')).not.toBe('')
    }
  })

  it('credits the dock, and no one else, from the bottom of the page', () => {
    render(<App />)

    const credit = screen.getByRole('link', { name: DOCK_LABEL })

    expect(credit).toHaveAttribute('href', DOCK_URL)
    expect(screen.getByTestId('footer')).toHaveTextContent(String(new Date().getFullYear()))
  })

  it('carries no trace of where the design came from, in anything it renders', async () => {
    const { container } = render(<App />)

    expect(carriesSourceText(document.body.textContent ?? '')).toBe(false)
    expect(carriesSourceText(container.innerHTML)).toBe(false)

    for (const label of LABELS) {
      expect({ label, carriesSourceLabel: carriesSourceLabel(label) }).toEqual({
        label,
        carriesSourceLabel: false,
      })
    }

    await userEvent.setup().click(screen.getByRole('button', { name: MENU_TOGGLE_LABEL }))

    expect(carriesSourceText(document.body.textContent ?? '')).toBe(false)
  })

  it('ships no source string in any file it ships', () => {
    expect(files.length).toBeGreaterThan(15)

    for (const [path, content] of files) {
      expect({ path, carriesSourceText: carriesSourceText(content) }).toEqual({
        path,
        carriesSourceText: false,
      })
    }
  })

  it('recognises the source strings it forbids, and nothing that merely looks like them', () => {
    expect(carriesSourceText('A note pinned under the mug')).toBe(false)
    expect(carriesSourceText('Cherish — a wedding day page')).toBe(false)
    expect(carriesSourceLabel(['Blog'].join(''))).toBe(true)
    expect(carriesSourceLabel(['Our ', 'Tale'].join(''))).toBe(false)
    expect(carriesSourceLabel('The Long Table Lunch')).toBe(false)
  })

  it('keeps the design’s own shape language and its two faces in the stylesheet', () => {
    const css = raw['./index.css'] as string

    expect(css).toContain('@media (prefers-reduced-motion: reduce)')
    expect(css).toContain('--color-brand: #d48f4c')
    expect(css).toContain('--color-ink: #353535')
    expect(css).toContain('--color-muted: #747e8c')
    expect(css).toContain('--radius-card: 10px')
    expect(css).toContain('--shadow-card: 0 5px 30px rgba(53, 53, 53, 0.06)')
    expect(css).toContain('--shadow-venue: 0 5px 35px rgba(53, 53, 53, 0.06)')
    expect(css).toContain('.nav-label::after')
    expect(css).toContain('.counter-colon::after')
    expect(css).toContain('.event-rail::before')
    expect(raw['../index.html']).toContain('family=Arima+Madurai')
    expect(raw['../index.html']).toContain('family=Work+Sans')
  })

  it('ships the deploy target this app is published on', () => {
    expect(raw['../public/CNAME']?.trim()).toBe('cherish.free.componentdock.com')
    expect(raw['../package.json']).toContain('"homepage": "https://cherish.free.componentdock.com"')
    expect(raw['../package.json']).toContain('"name": "@free-react-templates/cherish"')
    expect(shot('hero', 1920, 1080)).toBe('https://picsum.photos/seed/cherish-hero/1920/1080')
  })
})
