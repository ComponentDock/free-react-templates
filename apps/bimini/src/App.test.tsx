import { act, fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import {
  BRAND,
  CLOSE_LABEL,
  CLOSE_REVEAL_MS,
  DOCK_URL,
  FOOTER_NOTE,
  HOME_HREF,
  PAGE_TITLE,
  ROWS,
  SECTIONS,
  SHEET_LABEL,
  SHEET_STATE_CLASS,
  SKIP_TARGET,
  TOGGLE_LABEL,
  TOP_TARGET,
  rowDestinations,
  shot,
} from './lib/site'
import { overlayClass, pageClass, skipLinkClass, toggleClass } from './lib/styles'
import { carriesSourceLabel, carriesSourceText, SOURCE_PHRASES } from './test/provenance'

/** Every file that ships with the app, read through Vite so no shell is involved. */
const raw = import.meta.glob(
  ['./**/*.{ts,tsx,css}', '../index.html', '../package.json', '../public/CNAME'],
  {
    query: '?raw',
    import: 'default',
    eager: true,
  },
) as Record<string, string>

const files = Object.entries(raw)

/** The order the page's own links appear in, from the skip link down to the foot of the page. */
const HREFS = [SKIP_TARGET, HOME_HREF, ...rowDestinations(), HOME_HREF, DOCK_URL, TOP_TARGET]

async function openSheet() {
  const user = userEvent.setup()

  await user.click(screen.getByRole('button', { name: TOGGLE_LABEL }))

  return user
}

describe('App — the whole page', () => {
  it('names the document after the template', () => {
    render(<App />)

    expect(document.title).toBe(PAGE_TITLE)
  })

  it('stands the cover and the header in front of the hero and the blocks behind it', () => {
    const { container } = render(<App />)

    const page = container.querySelector('#top') as HTMLElement

    expect(page.className).toBe(pageClass)
    expect(page.className).toContain('relative')
    expect(Array.from(page.children).map((child) => child.tagName)).toEqual([
      'A',
      'NAV',
      'HEADER',
      'MAIN',
      'FOOTER',
    ])

    const skip = screen.getByRole('link', { name: 'Skip to content' })

    expect(skip.className).toBe(skipLinkClass)
    expect(skip).toHaveAttribute('href', SKIP_TARGET)
    expect(container.querySelector(SKIP_TARGET)).not.toBeNull()
    expect(page.children[1]).toBe(screen.getByTestId('sheet'))
    expect(page.children[2]).toBe(screen.getByTestId('header'))
    expect(page.children[3]?.firstElementChild).toBe(screen.getByTestId('hero'))
  })

  it('runs the hero the full height of the window and the blocks below it in order', () => {
    const { container } = render(<App />)

    const hero = screen.getByTestId('hero')

    expect(hero.className).toContain('min-h-screen')
    expect(hero.className).toContain('bg-hero')

    const blocks = Array.from(container.querySelectorAll('main > section'))

    expect(blocks[0]).toBe(hero)
    expect(blocks.slice(1).map((block) => block.id)).toEqual(SECTIONS.map((section) => section.id))
    expect(blocks).toHaveLength(SECTIONS.length + 1)

    expect(container.querySelector('footer')).toBe(screen.getByTestId('footer'))
  })

  it('keeps the sheet down, and out of the way, until it is opened', () => {
    render(<App />)

    const sheet = screen.getByTestId('sheet')

    expect(sheet.className).toBe(overlayClass(false))
    expect(sheet).toHaveAccessibleName(SHEET_LABEL)
    expect(sheet.className).toContain('invisible')
    expect(document.body.classList.contains(SHEET_STATE_CLASS)).toBe(false)

    const labels = within(sheet).getAllByRole('link', { hidden: true })

    expect(labels[0]?.textContent).toBe(BRAND)

    const rows = labels.slice(1)

    expect(rows.map((label) => label.textContent)).toEqual(ROWS.map((row) => row.label))

    const current = rows.filter((label) => label.getAttribute('aria-current') === 'page')

    expect(current).toHaveLength(1)
    expect(current[0]).toBe(rows[0])
    expect(current[0]?.textContent).toBe(ROWS[0]?.label)
    expect(current[0]?.className).toContain('text-current-row')
    expect(rows[1]?.className).toContain('text-on-dark')
  })

  it('grows the cover over the page on the burger, and locks the page behind it', async () => {
    render(<App />)

    const toggle = screen.getByRole('button', { name: TOGGLE_LABEL })

    expect(toggle.className).toBe(toggleClass())
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', screen.getByTestId('sheet').id)

    await openSheet()

    expect(screen.getByTestId('sheet').className).toBe(overlayClass(true))
    expect(screen.getByTestId('sheet').className).toContain('scale-100')
    expect(document.body.classList.contains(SHEET_STATE_CLASS)).toBe(true)
    expect(screen.getByRole('button', { name: TOGGLE_LABEL })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(document.activeElement).toBe(screen.getByTestId('sheet'))
  })

  it('holds the close control back for the design’s own delay, then closes on it', async () => {
    render(<App />)

    await openSheet()

    const close = screen.getByTestId('close')

    expect(close).toHaveAttribute('aria-hidden', 'true')
    expect(close.className).toContain('invisible')

    // The design's own 900ms, waited out on a real clock so the reveal is observed as it happens.
    await act(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, CLOSE_REVEAL_MS + 50)
      })
    })

    expect(close).toHaveAttribute('aria-hidden', 'false')
    expect(close.className).toContain('visible')

    fireEvent.click(close)

    expect(screen.getByTestId('sheet').className).toBe(overlayClass(false))
    expect(document.body.classList.contains(SHEET_STATE_CLASS)).toBe(false)
    expect(document.activeElement).toBe(screen.getByRole('button', { name: TOGGLE_LABEL }))
  })

  it('takes the cover down on Escape and on a press past it, and forgives a press on it', async () => {
    render(<App />)

    await openSheet()
    fireEvent.keyDown(document, { key: 'Escape' })

    expect(screen.getByTestId('sheet').className).toBe(overlayClass(false))

    await openSheet()
    fireEvent.mouseDown(screen.getByTestId('sheet-photo'))

    expect(screen.getByTestId('sheet').className).toBe(overlayClass(true))

    fireEvent.mouseDown(screen.getByRole('button', { name: TOGGLE_LABEL }))

    expect(screen.getByTestId('sheet').className).toBe(overlayClass(true))

    fireEvent.mouseDown(document.body)

    expect(screen.getByTestId('sheet').className).toBe(overlayClass(false))
  })

  it('takes the cover down when one of its own labels is followed', async () => {
    const user = userEvent.setup()

    const { container } = render(<App />)

    await openSheet()

    const label = within(screen.getByTestId('sheet')).getAllByRole('link', { hidden: true })[1]!

    label.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(label)

    expect(screen.getByTestId('sheet').className).toBe(overlayClass(false))
    expect(container.querySelector(label.getAttribute('href') as string)).not.toBeNull()
  })

  it('leaves no dead link anywhere on the page, before or after the cover is up', async () => {
    const { container } = render(<App />)

    const away = Array.from(container.querySelectorAll('a')) as HTMLAnchorElement[]

    expect(away.some((anchor) => anchor.getAttribute('href') === '#')).toBe(false)
    expect(away.map((anchor) => anchor.getAttribute('href'))).toEqual(HREFS)

    for (const anchor of away) {
      const href = anchor.getAttribute('href') as string

      if (href.startsWith('#')) {
        expect(container.querySelector(href)).not.toBeNull()
      }
    }

    await openSheet()

    const out = Array.from(container.querySelectorAll('a')) as HTMLAnchorElement[]

    expect(out.some((anchor) => anchor.getAttribute('href') === '#')).toBe(false)
    expect(out.map((anchor) => anchor.getAttribute('href'))).toEqual(HREFS)
  })

  it('materialises every destination, each kept clear of the header', () => {
    const { container } = render(<App />)

    for (const destination of rowDestinations()) {
      const block = container.querySelector(destination)

      expect(block).not.toBeNull()
      expect((block as HTMLElement).style.scrollMarginTop).toBe('120px')
      expect((block as HTMLElement).getAttribute('aria-labelledby')).toBe(`${destination.slice(1)}-heading`)
    }

    expect(container.querySelector('#top')).toBe(container.firstElementChild)
  })

  it('runs the page on the app’s own placeholder pictures', () => {
    const { container } = render(<App />)

    const pictures = Array.from(container.querySelectorAll('img'))

    expect(pictures.length).toBeGreaterThanOrEqual(6)

    for (const picture of pictures) {
      expect(picture.getAttribute('src')).toContain('https://picsum.photos/seed/bimini-')
    }

    expect(SECTIONS[0]?.items[0]?.image).toBe(shot('cockpit-1', 800, 600))
  })

  it('carries no source string anywhere it renders', async () => {
    const { container } = render(<App />)

    expect(carriesSourceText(document.body.textContent ?? '')).toBe(false)

    const labels = [
      PAGE_TITLE,
      BRAND,
      FOOTER_NOTE,
      TOGGLE_LABEL,
      CLOSE_LABEL,
      SHEET_LABEL,
      ...ROWS.map((row) => row.label),
      ...SECTIONS.flatMap((section) => [
        section.eyebrow,
        section.heading,
        ...section.items.map((item) => item.title),
      ]),
    ]

    for (const label of labels) {
      expect({ label, carriesSourceLabel: carriesSourceLabel(label) }).toEqual({
        label,
        carriesSourceLabel: false,
      })
    }

    await openSheet()

    expect(carriesSourceText(document.body.textContent ?? '')).toBe(false)
    expect(carriesSourceText(container.innerHTML)).toBe(false)
  })

  it('ships no source string, and no rounding or elevation, in any file it ships', () => {
    expect(files.length).toBeGreaterThan(15)

    for (const [path, content] of files) {
      expect({ path, carriesSourceText: carriesSourceText(content) }).toEqual({
        path,
        carriesSourceText: false,
      })
      expect({ path, radiusOrElevation: /border-radius|rounded|box-shadow|shadow-/i.test(content) }).toEqual(
        { path, radiusOrElevation: false },
      )
      expect({ path, sourceClass: /\bcl-[a-z]|ftco/i.test(content) }).toEqual({
        path,
        sourceClass: false,
      })
    }
  })

  it('honours a reduced-motion preference and locks the page while the sheet is up', () => {
    const css = raw['./index.css'] as string

    expect(css).toContain('@media (prefers-reduced-motion: reduce)')
    expect(css).toContain(`body.${SHEET_STATE_CLASS}`)
    expect(css).toContain('--color-sheet: rgba(0, 0, 0, 0.99)')
    expect(css).toContain('--color-current-row: #f8b500')
    expect(css).toContain('--color-accent: #fec771')
    expect(css).toContain('.menu-label-hairline::after')
    expect(css).toContain('height: 2px')
    expect(css).toContain('transform: scaleX(0)')
    expect(css).toContain("a[aria-current='page'] > .menu-label-hairline::after")
    expect(raw['../index.html']).toContain('family=Poppins:wght@400;500;600;700')
  })

  it('recognises the source strings it forbids, and nothing that merely looks like them', () => {
    expect(carriesSourceText(`${SOURCE_PHRASES[0]} weekly`)).toBe(true)
    expect(carriesSourceText('One sheet, four labels, one charcoal hero')).toBe(false)
    expect(carriesSourceLabel(['Blog'].join(''))).toBe(true)
    expect(carriesSourceLabel('Cockpit canvas')).toBe(false)
  })

  it('ships the deploy target this app is published on', () => {
    expect(raw['../public/CNAME']?.trim()).toBe('bimini.free.componentdock.com')
    expect(raw['../package.json']).toContain('"homepage": "https://bimini.free.componentdock.com"')
    expect(raw['../package.json']).toContain('"name": "@free-react-templates/bimini"')
  })

  it('credits the dock, and no one else, from the bottom of the page', () => {
    render(<App />)

    const credit = screen.getByRole('link', { name: 'Component Dock' })

    expect(credit).toHaveAttribute('href', DOCK_URL)
    expect(screen.getByTestId('footer')).toHaveTextContent(String(new Date().getFullYear()))
    expect(screen.getByTestId('footer')).toHaveTextContent(FOOTER_NOTE)
  })
})
