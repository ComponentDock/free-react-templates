import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Panel } from './Panel'
import {
  CARDS,
  MENU,
  MENU_AFTER_ROW,
  MENU_ID_PANEL,
  MENU_LABEL,
  NAV,
  PANEL_ID,
  PANEL_NAV_LABEL,
} from '../lib/site'
import { navRowClass, panelClass, panelInnerClass, panelListClass } from '../lib/styles'

describe('Panel — the bar folded away below 992px', () => {
  it('travels between nothing and its own height, hidden from 992px up', () => {
    const { container } = render(<Panel isOpen={false} onNavigate={() => {}} />)

    const fold = container.firstElementChild as HTMLElement

    expect(fold.id).toBe(PANEL_ID)
    expect(fold.className).toBe(panelClass(false))
    expect(fold.className).toContain('grid-rows-[0fr]')
    expect(fold.className).toContain('basis-full')
    expect(fold.className).toContain('lg:hidden')
    expect(fold.firstElementChild?.className).toBe(panelInnerClass)
    expect(screen.queryByTestId('panel')).toBeNull()
    expect(screen.queryByRole('list')).toBeNull()
  })

  it('mounts the design’s four rows in one column while it is open, the panel row last', () => {
    render(<Panel isOpen onNavigate={() => {}} />)

    const panel = screen.getByTestId('panel')

    expect(panel.tagName).toBe('NAV')
    expect(panel).toHaveAccessibleName(PANEL_NAV_LABEL)

    const list = within(panel).getByRole('list')

    expect(list.className).toBe(panelListClass)
    expect(list.className).toContain('pb-[10px]')
    expect(list.children).toHaveLength(NAV.length + 1)
    expect(Array.from(list.children).map((row) => row.textContent)).toEqual([
      ...NAV.map((item) => item.label),
      MENU_LABEL,
    ])
  })

  it('draws those rows as full-width blocks, and the panel row’s own id apart from the bar’s', () => {
    render(<Panel isOpen onNavigate={() => {}} />)

    const rows = within(screen.getByTestId('panel')).getAllByRole('link')

    expect(rows).toHaveLength(NAV.length)
    expect(rows.map((row) => row.textContent)).toEqual(NAV.map((item) => item.label))
    expect(rows[0]?.className).toBe(navRowClass({ variant: 'panel', current: true }))
    expect(rows[1]?.className).toBe(navRowClass({ variant: 'panel', current: false }))
    expect(rows.every((row) => row.className.includes('py-[14.4px]'))).toBe(true)
    expect(
      within(screen.getByTestId('panel')).getByRole('button', { name: MENU_LABEL }),
    ).toBeInTheDocument()
  })

  it('opens the wide panel from the folded chrome only once its own row asks for it', async () => {
    const user = userEvent.setup()

    render(<Panel isOpen onNavigate={() => {}} />)

    const trigger = within(screen.getByTestId('panel')).getByRole('button', { name: MENU_LABEL })

    expect(screen.queryByTestId(MENU_ID_PANEL)).toBeNull()

    fireEvent.click(trigger)

    const panel = screen.getByTestId(MENU_ID_PANEL)
    const links = within(panel).getAllByRole('link')

    expect(panel.className).toContain('static')
    expect(links).toHaveLength(MENU.length + CARDS.length * 2)
    expect(links[0]).toHaveAttribute('href', MENU[0]!.href)

    await user.keyboard('{Escape}')
    expect(screen.queryByTestId(MENU_ID_PANEL)).toBeNull()
  })

  it('folds the whole panel away once a row inside it has been followed', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    render(<Panel isOpen onNavigate={onNavigate} />)

    const row = within(screen.getByTestId('panel')).getAllByRole('link')[1] as HTMLAnchorElement

    row.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(row)

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })

  it('stands the last row where the model puts it, after the three plain ones', () => {
    render(<Panel isOpen onNavigate={() => {}} />)

    const list = screen.getByTestId('panel').querySelector('ul') as HTMLElement
    const last = list.children[MENU_AFTER_ROW + 1] as HTMLElement

    expect(within(last).getByRole('button')).toHaveAccessibleName(MENU_LABEL)
    expect(NAV.length).toBe(MENU_AFTER_ROW + 1)
  })
})
