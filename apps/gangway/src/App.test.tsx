import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { DOCK_URL, MENU_LABEL, PAGE_TITLE, SECTIONS, SITE_NAME, SUB_PAGES } from './lib/site'

/** Every destination the page declares, top-level and nested alike. */
const renderedSections = [...SECTIONS, ...SUB_PAGES]

describe('App — the whole page', () => {
  it('names the document after the template', () => {
    render(<App />)

    expect(document.title).toBe(PAGE_TITLE)
  })

  it('stacks the bar, the band, one section per declared destination, and the credit strip', () => {
    const { container } = render(<App />)

    const page = container.querySelector('#top') as HTMLElement

    expect(page.className).toContain('flex')
    expect(page.className).toContain('font-sans')
    expect(page.children[0]?.tagName).toBe('A')
    expect(page.children[1]?.tagName).toBe('HEADER')
    expect(page.children[2]?.tagName).toBe('MAIN')
    expect(page.children[3]?.tagName).toBe('FOOTER')

    const main = screen.getByRole('main')

    expect(main.children[0]).toBe(screen.getByRole('region', { name: 'Hero band' }))

    const skip = screen.getAllByRole('link', { name: 'Skip to content' })[0] as HTMLAnchorElement

    expect(skip.getAttribute('href')).toBe('#deck')
    expect(skip.className).toContain('sr-only')
  })

  it('materialises every destination the bar and the drawer declare', () => {
    render(<App />)

    for (const section of renderedSections) {
      const node = screen.getByTestId(`${section.id}-section`)

      expect(node).toHaveAttribute('id', section.id)
      expect(node).toHaveTextContent(section.heading)
    }

    // The eight rows the second submenu describes hang off the harbour section.
    const harbour = screen.getByTestId('harbour-section')

    for (const page of SUB_PAGES) {
      expect(within(harbour).getByTestId(`${page.id}-section`)).toBeInTheDocument()
    }
  })

  it('leaves no dead link anywhere on the page', () => {
    const { container } = render(<App />)

    const anchors = Array.from(container.querySelectorAll('a')) as HTMLAnchorElement[]
    const inPage = anchors.filter((anchor) => anchor.getAttribute('href')?.startsWith('#'))

    expect(anchors.length).toBeGreaterThan(20)
    expect(inPage.some((anchor) => anchor.getAttribute('href') === '#')).toBe(false)

    for (const anchor of inPage) {
      const target = anchor.getAttribute('href')!.slice(1)

      expect(container.querySelector(`#${CSS.escape(target)}`)).not.toBeNull()
    }
  })

  it('offers the same navigation in both of its presentations', async () => {
    const user = userEvent.setup()

    render(<App />)

    const wide = screen.getByTestId('desktop-nav')

    // The panel's own copy exists only while it is out, so it is opened to compare them.
    expect(screen.queryByTestId('drawer-nav')).toBeNull()

    await user.click(screen.getByRole('button', { name: MENU_LABEL }))

    const drawer = screen.getByTestId('drawer-nav')

    expect(wide.children).toHaveLength(8)
    expect(drawer.children).toHaveLength(8)
    expect(Array.from(wide.children).map((row) => row.querySelector('a, button')?.textContent)).toEqual(
      Array.from(drawer.children).map((row) => row.querySelector('a, button')?.textContent),
    )
  })

  it('credits Component Dock once, and borrows nothing from the source’s own markup', () => {
    const { container } = render(<App />)

    expect(screen.getAllByRole('link', { name: 'Component Dock' })).toHaveLength(1)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute('href', DOCK_URL)
    expect(container.textContent).toContain(SITE_NAME)

    // Not one class from the source's own utility namespace reaches the page.
    const classNames = Array.from(container.querySelectorAll('[class]')).flatMap((node) =>
      (node.getAttribute('class') ?? '').split(/\s+/),
    )

    expect(classNames.some((name) => /^cl-[a-z]/.test(name))).toBe(false)
  })
})
