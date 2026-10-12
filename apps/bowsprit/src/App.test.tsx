import { fireEvent, render, screen, within } from '@testing-library/react'
import appShell from '../index.html?raw'
import userEvent from '@testing-library/user-event'
import { mockMatchMedia } from './test/match-media'
import { App } from './App'
import {
  CTA,
  DOCK_URL,
  MENU_LABEL,
  NAV,
  PAGE_TITLE,
  SECTIONS,
  SITE_NAME,
  SUB_PAGES,
  isBranch,
} from './lib/site'
import type { NavItem } from './lib/site'

/** Every source file the app ships, read through Vite itself so the lookup does not
 *  depend on where the runner was started from. */
const SOURCES: Record<string, string> = {
  ...(import.meta.glob('./**/*.{ts,tsx,css}', {
    query: '?raw',
    import: 'default',
    eager: true,
  }) as Record<string, string>),
  '../index.html': appShell,
}

const hamburger = () => screen.getByRole('button', { name: MENU_LABEL })

/** Every row in the model at every depth, in menu order. */
function flatten(items: NavItem[]): NavItem[] {
  return items.flatMap((item) => (isBranch(item) ? [item, ...flatten(item.items)] : [item]))
}

describe('App', () => {
  it('composes the bar, the band, every declared section and the closing strip in order', () => {
    const { container } = render(<App />)

    expect(Array.from(document.querySelectorAll('header, main, footer')).map((el) => el.tagName)).toEqual([
      'HEADER',
      'MAIN',
      'FOOTER',
    ])

    expect(container.firstElementChild).toHaveAttribute('id', 'top')
    expect(container.firstElementChild).toHaveClass('flex', 'flex-col', 'bg-white', 'font-sans')

    const bands = Array.from(screen.getByRole('main').children) as HTMLElement[]

    expect(bands).toHaveLength(1 + SECTIONS.length)
    expect(bands[0]).toHaveAttribute('id', 'hero')
    expect(bands.slice(1).map((band) => band.id)).toEqual(SECTIONS.map((section) => section.id))

    const skip = screen.getByRole('link', { name: 'Skip to content' })

    expect(skip).toHaveAttribute('href', '#dock')
    expect(document.title).toBe(PAGE_TITLE)
  })

  it('leaves no dead anchor behind: every row, destination and credit resolves somewhere real', () => {
    const { container } = render(<App />)

    expect(container.querySelector('a[href="#"]')).toBeNull()

    for (const item of flatten(NAV)) {
      if (!isBranch(item)) {
        expect(container.querySelector(item.href)).not.toBeNull()
      }
    }

    expect(container.querySelector(CTA.href)).not.toBeNull()
    expect(container.querySelectorAll('#hero, main > section')).toHaveLength(1 + SECTIONS.length)

    for (const page of SUB_PAGES) {
      expect(container.querySelector(`#${page.id}`)).not.toBeNull()
    }
  })

  it('ships exactly one Component Dock credit and no external attribution anywhere else', () => {
    const { container } = render(<App />)

    const outbound = Array.from(container.querySelectorAll('a[href^="http"]'))

    expect(outbound).toHaveLength(1)
    expect(outbound[0]).toHaveAttribute('href', DOCK_URL)
    expect(outbound[0]).toHaveTextContent('Component Dock')
    expect(outbound[0]).toHaveAttribute('target', '_blank')
    expect(outbound[0]).toHaveAttribute('rel', 'noreferrer')
    expect(container.querySelectorAll('img')).toHaveLength(0)
  })

  it('keeps the source it was measured from out of the app entirely', () => {
    // Every needle is assembled from fragments so this assertion cannot match its own text.
    const forbidden = [
      ['color', 'lib'].join(''),
      ['website-menu-', '08'].join(''),
      ['cl-', 'navbar'].join(''),
      ['snippet', '.js'].join(''),
    ]
    const offenders = Object.entries(SOURCES)
      .filter(([, body]) => {
        const text = body.toLowerCase()

        return forbidden.some((needle) => text.includes(needle))
      })
      .map(([path]) => path)

    expect(Object.keys(SOURCES).length).toBeGreaterThan(15)
    expect(offenders).toEqual([])
  })

  it('expands the bar into the five rows on the narrow viewport and folds it away from every exit', async () => {
    const user = userEvent.setup()

    render(<App />)

    expect(screen.queryByTestId('collapse-nav')).toBeNull()

    await user.click(hamburger())

    const rows = screen.getByTestId('collapse-nav')

    expect(Array.from(rows.children).map((row) => row.textContent)).toEqual(
      NAV.map((item) => item.label),
    )
    expect(within(rows).getByRole('link', { name: 'Dock' })).toHaveAttribute(
      'aria-current',
      'page',
    )

    // Escape folds the whole list away...
    await user.keyboard('{Escape}')
    expect(screen.queryByTestId('collapse-nav')).toBeNull()
    expect(hamburger()).toHaveAttribute('aria-expanded', 'false')
    expect(document.activeElement).toBe(hamburger())

    // ...and so does taking one of the rows.
    await user.click(hamburger())

    const link = within(screen.getByTestId('collapse-nav')).getByRole('link', { name: 'Logbook' })

    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)

    expect(screen.queryByTestId('collapse-nav')).toBeNull()
    expect(hamburger()).toHaveAttribute('aria-expanded', 'false')
  })

  it('starts wide with no interaction, and folds an open list away when the viewport reaches 768px', async () => {
    const user = userEvent.setup()
    const media = mockMatchMedia(false)

    const { unmount } = render(<App />)

    await user.click(hamburger())
    expect(screen.queryByTestId('desktop-nav')).toBeNull()

    media.change(true)

    expect(screen.getByTestId('desktop-nav')).toBeInTheDocument()
    expect(screen.queryByTestId('collapse-nav')).toBeNull()

    unmount()

    mockMatchMedia(true)

    render(<App />)

    expect(screen.getByTestId('desktop-nav')).toBeInTheDocument()
    expect(screen.getByTestId('desktop-cta')).toBeInTheDocument()

    const banner = screen.getByRole('banner')

    expect(within(banner).getByRole('heading', { level: 1 }).textContent).toBe(SITE_NAME)
    expect(fireEvent.mouseEnter(screen.getByRole('button', { name: 'Supplies' }))).toBe(true)
    expect(screen.getByRole('link', { name: 'Catering' })).toHaveAttribute('href', '#catering')
  })
})
