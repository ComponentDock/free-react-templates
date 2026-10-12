import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Bar } from './Bar'
import {
  DESKTOP_NAV_ID,
  MENU_AFTER_ROW,
  MENU_LABEL,
  NAV,
  PRIMARY_NAV_LABEL,
  TOGGLER_LABEL,
} from '../lib/site'
import { barClass, barContainerClass, navListClass, navRowClass, panelClass } from '../lib/styles'

describe('Bar — the rounded navy slab inside the container', () => {
  it('is a landmark of its own, on the design’s own rounded surface', () => {
    render(<Bar />)

    const bar = screen.getByRole('navigation', { name: PRIMARY_NAV_LABEL })

    expect(bar).toBe(screen.getByTestId('bar'))
    expect(bar.className).toBe(barClass)
    expect(bar.className).toContain('rounded-bar')
    expect(bar.className).toContain('bg-bar')
    expect(bar.className).toContain('shadow-bar')
    expect(bar.className).toContain('max-lg:bg-black')
    expect(bar.className).not.toMatch(/sticky|fixed/)
  })

  it('puts the wordmark, the toggler, the list and the folded panel in the design’s own order', () => {
    render(<Bar />)

    const row = screen.getByTestId('brand').parentElement as HTMLElement

    expect(row.className).toBe(barContainerClass)
    expect(
      Array.from(row.children).map((child) => child.getAttribute('data-testid') ?? child.className),
    ).toEqual(['brand', 'toggler', DESKTOP_NAV_ID, panelClass(false)])
  })

  it('carries the design’s four rows in the wide list, the panel row last', () => {
    render(<Bar />)

    const list = within(screen.getByTestId(DESKTOP_NAV_ID)).getByRole('list')

    expect(list.className).toBe(navListClass)
    expect(list.className).toContain('ml-auto')
    expect(list.children).toHaveLength(NAV.length + 1)
    expect(Array.from(list.children).map((row) => row.textContent)).toEqual([
      ...NAV.map((item) => item.label),
      MENU_LABEL,
    ])
    expect(within(screen.getByTestId(DESKTOP_NAV_ID)).getByRole('button')).toHaveAccessibleName(
      MENU_LABEL,
    )
    expect(NAV.length).toBe(MENU_AFTER_ROW + 1)
  })

  it('wears the amber on the row the page is on, and on no other row', () => {
    render(<Bar />)

    const rows = within(screen.getByTestId(DESKTOP_NAV_ID)).getAllByRole('link')

    expect(rows.map((row) => row.textContent)).toEqual(NAV.map((item) => item.label))
    expect(rows[0]?.className).toBe(navRowClass({ variant: 'desktop', current: true }))
    expect(rows[1]?.className).toBe(navRowClass({ variant: 'desktop', current: false }))
    expect(rows.filter((row) => row.getAttribute('aria-current') === 'page')).toHaveLength(1)
  })

  it('folds the four rows into a column of its own once the toggler is pressed', async () => {
    const user = userEvent.setup()

    render(<Bar />)

    const toggler = screen.getByRole('button', { name: TOGGLER_LABEL })

    expect(toggler).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByTestId('panel')).toBeNull()

    await user.click(toggler)

    expect(toggler).toHaveAttribute('aria-expanded', 'true')
    expect(within(screen.getByTestId('panel')).getAllByRole('link')).toHaveLength(NAV.length)

    await user.click(toggler)

    expect(toggler).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByTestId('panel')).toBeNull()
  })
})
