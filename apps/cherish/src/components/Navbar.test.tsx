import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import {
  BRAND,
  MENU_ID,
  MENU_LINKS,
  MENU_TOGGLE_LABEL,
  MORE_ITEMS,
  MORE_LABEL,
  NAV_ITEMS,
  SEARCH_TOGGLE_LABEL,
  TOP_TARGET,
} from '../lib/site'
import {
  burgerBarClass,
  burgerClass,
  caretClass,
  dropdownLinkClass,
  headerClass,
  mobileLinkClass,
  navLinkClass,
  navRowClass,
  searchToggleClass,
} from '../lib/styles'

function renderNavbar(isMenuOpen = false) {
  const onToggleMenu = vi.fn()
  const onOpenSearch = vi.fn()

  render(<Navbar isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} onOpenSearch={onOpenSearch} />)

  return { onToggleMenu, onOpenSearch }
}

describe('Navbar — the monogram, the row and the folded-away menu', () => {
  it('centres the monogram over a row carrying every label and the search control', () => {
    renderNavbar()

    const header = screen.getByRole('banner')

    expect(header.className).toBe(headerClass)

    const brand = within(header).getByRole('link', { name: BRAND })

    expect(brand).toHaveAttribute('href', TOP_TARGET)

    const nav = within(header).getByRole('navigation', { name: 'The day' })

    expect(nav.className).toBe(navRowClass)

    const labels = within(nav)
      .getAllByRole('link')
      .map((link) => link.textContent)

    expect(labels).toEqual([
      ...NAV_ITEMS.map((item) => item.label),
      MORE_LABEL,
      ...MORE_ITEMS.map((item) => item.label),
    ])

    expect(screen.getByRole('button', { name: SEARCH_TOGGLE_LABEL }).className).toBe(
      searchToggleClass,
    )
  })

  it('marks the block the page is standing on, and leaves the rest of the row plain', () => {
    renderNavbar()

    const nav = screen.getByRole('navigation', { name: 'The day' })
    const current = within(nav).getAllByRole('link').filter((link) => link.textContent === 'Today')

    expect(current[0]).toHaveAttribute('aria-current', 'page')
    expect(current[0]?.className).toBe(navLinkClass(true))

    const other = within(nav).getAllByRole('link').filter((link) => link.textContent === 'Our Tale')

    expect(other[0]).not.toHaveAttribute('aria-current')
    expect(other[0]?.className).toBe(navLinkClass(false))
    expect(within(nav).getByText(MORE_LABEL).className).toBe(navLinkClass(false))
  })

  it('holds every label of the page under the last item of the row', () => {
    renderNavbar()

    const nav = screen.getByRole('navigation', { name: 'The day' })
    const dropdown = within(nav).getAllByRole('link', { hidden: true }).slice(NAV_ITEMS.length + 1)

    expect(dropdown.map((link) => link.textContent)).toEqual(MORE_ITEMS.map((item) => item.label))
    expect(dropdown.map((link) => link.getAttribute('href'))).toEqual(
      MORE_ITEMS.map((item) => item.href),
    )

    for (const link of dropdown) {
      expect(link.className).toBe(dropdownLinkClass)
    }

    expect(
      within(nav).getByText(MORE_LABEL).parentElement?.querySelector('svg')?.getAttribute('class'),
    ).toContain(caretClass)
  })

  it('folds the row away behind the burger, and opens it on the control', async () => {
    const { onToggleMenu } = renderNavbar()

    const burger = screen.getByRole('button', { name: MENU_TOGGLE_LABEL })

    expect(burger.className).toBe(burgerClass)
    expect(burger).toHaveAttribute('aria-expanded', 'false')
    expect(burger).toHaveAttribute('aria-controls', MENU_ID)
    expect(burger.querySelectorAll('span')[0]?.className).toBe(burgerBarClass('top', false))
    expect(burger.querySelectorAll('span')[1]?.className).toBe(burgerBarClass('bottom', false))
    expect(screen.queryByRole('navigation', { name: 'Every block of the page' })).toBeNull()

    await userEvent.setup().click(burger)

    expect(onToggleMenu).toHaveBeenCalledTimes(1)
  })

  it('carries every label into the open panel, and crosses the burger while it is up', () => {
    renderNavbar(true)

    const burger = screen.getByRole('button', { name: MENU_TOGGLE_LABEL })

    expect(burger).toHaveAttribute('aria-expanded', 'true')
    expect(burger.querySelectorAll('span')[0]?.className).toBe(burgerBarClass('top', true))
    expect(burger.querySelectorAll('span')[1]?.className).toBe(burgerBarClass('bottom', true))

    const panel = screen.getByRole('navigation', { name: 'Every block of the page' })

    expect(panel).toHaveAttribute('id', MENU_ID)

    const labels = within(panel).getAllByRole('link')

    expect(labels.map((link) => link.textContent)).toEqual(MENU_LINKS.map((item) => item.label))
    expect(labels.map((link) => link.getAttribute('href'))).toEqual(
      MENU_LINKS.map((item) => item.href),
    )
    expect(labels[0]?.className).toBe(mobileLinkClass(true))
    expect(labels[0]).toHaveAttribute('aria-current', 'page')
    expect(labels[1]?.className).toBe(mobileLinkClass(false))
  })

  it('opens the search from its own control', async () => {
    const { onOpenSearch } = renderNavbar()

    await userEvent.setup().click(screen.getByRole('button', { name: SEARCH_TOGGLE_LABEL }))

    expect(onOpenSearch).toHaveBeenCalledTimes(1)
  })
})
