import { useState } from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Bar } from './Bar'
import {
  DESKTOP_NAV_ID,
  MENU_ID,
  MENU_LABEL,
  NAV,
  PANEL_ID,
  SEARCH_LABEL,
  TOGGLER_LABEL,
} from '../lib/site'
import { barClass, barRowClass, navListClass } from '../lib/styles'

/** The bar as the page drives it: the field's query lives one level up, exactly as in `App`. */
function Harness({ onQuery = vi.fn() }: { onQuery?: (value: string) => void }) {
  const [query, setQuery] = useState('')

  return (
    <Bar
      query={query}
      onQuery={(value) => {
        setQuery(value)
        onQuery(value)
      }}
    />
  )
}

describe('Bar — the white in-flow bar', () => {
  it('is white, full-bleed, in the flow and never pinned', () => {
    render(<Harness />)

    const bar = screen.getByTestId('bar')

    expect(bar.className).toBe(barClass)
    expect(bar.className).toContain('bg-white')
    expect(bar.className).toContain('shadow-bar')
    expect(bar.className).toContain('z-[3]')
    expect(bar.className).toContain('p-0')
    expect(bar.className).toContain('max-lg:p-[10px_15px]')
    expect(bar.className).toContain('relative')
    expect(bar.className).not.toMatch(/sticky|fixed/)
  })

  it('lays its chrome out in the design’s own order', () => {
    render(<Harness />)

    const row = screen.getByTestId('bar-row')

    expect(row.className).toBe(barRowClass)
    expect(Array.from(row.children).map((child) => child.tagName)).toEqual([
      'A',
      'FORM',
      'BUTTON',
      'NAV',
      'DIV',
    ])
    expect(row.lastElementChild).toHaveAttribute('id', PANEL_ID)
  })

  it('draws the five rows wide, the menu row second and the list centred in the middle', () => {
    render(<Harness />)

    const list = within(screen.getByTestId(DESKTOP_NAV_ID)).getByRole('list')

    expect(list.className).toBe(navListClass)
    expect(list.className).toContain('m-auto')
    expect(list.className).toContain('lg:flex-row')
    expect(list.className).toContain('lg:items-stretch')

    const rows = Array.from(list.children)

    expect(rows).toHaveLength(NAV.length + 1)
    expect(rows[0]?.textContent).toBe(NAV[0]?.label)
    expect(within(rows[1] as HTMLElement).getByRole('button')).toHaveAccessibleName(MENU_LABEL)
    expect(rows.slice(2).map((row) => row.textContent)).toEqual(
      NAV.slice(1).map((item) => item.label),
    )
  })

  it('keeps the wide list out of the narrow bar, where the panel is the presentation', () => {
    render(<Harness />)

    const nav = screen.getByTestId(DESKTOP_NAV_ID)

    expect(nav.className).toContain('hidden')
    expect(nav.className).toContain('lg:flex')
    expect(nav.className).toContain('lg:grow')
  })

  it('shows the query it is handed and reports every keystroke', async () => {
    const user = userEvent.setup()
    const onQuery = vi.fn()

    render(<Harness onQuery={onQuery} />)

    const field = screen.getByRole('searchbox', { name: SEARCH_LABEL })

    await user.type(field, 'sextant')

    expect(field).toHaveValue('sextant')
    expect(onQuery).toHaveBeenLastCalledWith('sextant')
  })

  it('opens the panel from its toggler and folds it away again on a row', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    const toggler = screen.getByRole('button', { name: TOGGLER_LABEL })

    expect(screen.queryByTestId('panel')).toBeNull()

    await user.click(toggler)

    const panel = screen.getByTestId('panel')

    expect(toggler).toHaveAttribute('aria-expanded', 'true')
    expect(within(panel).getByRole('list', { name: 'Workshop pages' })).toBeInTheDocument()

    const row = within(panel).getAllByRole('link')[2] as HTMLAnchorElement

    row.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(row)

    expect(screen.queryByTestId('panel')).toBeNull()
    expect(toggler).toHaveAttribute('aria-expanded', 'false')
  })

  it('folds the panel away on Escape without disturbing the bar’s own rows', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    await user.click(screen.getByRole('button', { name: TOGGLER_LABEL }))
    expect(screen.getByTestId('panel')).toBeInTheDocument()

    await user.keyboard('{Escape}')

    expect(screen.queryByTestId('panel')).toBeNull()
    expect(within(screen.getByTestId(DESKTOP_NAV_ID)).getAllByRole('link')).toHaveLength(NAV.length)
  })

  it('opens the workshop menu from the wide list without touching the panel', () => {
    render(<Harness />)

    fireEvent.click(screen.getByRole('button', { name: MENU_LABEL }))

    expect(screen.getByTestId(MENU_ID)).toBeInTheDocument()
    expect(screen.queryByTestId('panel')).toBeNull()
  })

  it('closes the wide menu when a destination inside it is chosen', () => {
    render(<Harness />)

    fireEvent.click(screen.getByRole('button', { name: MENU_LABEL }))

    const item = within(screen.getByTestId(MENU_ID)).getAllByRole('link')[0] as HTMLAnchorElement

    item.addEventListener('click', (event) => event.preventDefault(), { once: true })
    fireEvent.click(item)

    expect(screen.queryByTestId(MENU_ID)).toBeNull()
  })
})
