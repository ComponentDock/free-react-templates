import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Panel } from './Panel'
import {
  MENU,
  MENU_AFTER_ROW,
  MENU_LABEL,
  MENU_NAV_LABEL,
  NAV,
  PANEL_ID,
  PANEL_NAV_LABEL,
} from '../lib/site'
import { panelClass } from '../lib/styles'

describe('Panel — the folding column of rows', () => {
  it('folds itself into a zero-height track, and travels out of it on the design’s own ease', () => {
    render(<Panel isOpen={false} onNavigate={() => {}} />)

    const panel = document.getElementById(PANEL_ID) as HTMLElement

    expect(panel.className).toBe(panelClass(false))
    expect(panel.className).toContain('basis-full')
    expect(panel.className).toContain('grid-rows-[0fr]')
    expect(panel.className).toContain('duration-[350ms]')
    expect(panel.className).toContain('ease-collapse')
    expect(panel.className).toContain('lg:hidden')
    expect(screen.queryByTestId('panel')).toBeNull()
    expect(panel.querySelector('nav')).toBeNull()
  })

  it('mounts its own landmark and every row only while it is open', () => {
    render(<Panel isOpen onNavigate={() => {}} />)

    expect(panelClass(true)).toContain('grid-rows-[1fr]')

    const nav = screen.getByRole('navigation', { name: PANEL_NAV_LABEL })

    expect(nav).toBeInTheDocument()
    expect(within(nav).getAllByRole('link')).toHaveLength(NAV.length + MENU.length + 1)
  })

  it('stands the same five rows the bar draws, with the menu row in the design’s own place', () => {
    render(<Panel isOpen onNavigate={() => {}} />)

    const nav = screen.getByRole('navigation', { name: PANEL_NAV_LABEL })
    const list = nav.firstElementChild as HTMLElement

    expect(list.className).toContain('flex-col')
    expect(list.className).toContain('pb-[10px]')
    expect(list.children).toHaveLength(NAV.length + 1)

    const labels = Array.from(list.children).map((row) => row.textContent)

    expect(labels[0]).toContain(NAV[0]?.label)
    expect(labels[MENU_AFTER_ROW + 1]).toContain(MENU_LABEL)
    expect(labels.slice(MENU_AFTER_ROW + 2)).toEqual(NAV.slice(1).map((item) => item.label))
    expect(within(list).getByRole('list', { name: MENU_NAV_LABEL })).toBeInTheDocument()
  })

  it('folds the panel away when a row inside it is followed', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    render(<Panel isOpen onNavigate={onNavigate} />)

    const row = within(screen.getByRole('navigation', { name: PANEL_NAV_LABEL })).getAllByRole(
      'link',
    )[2] as HTMLAnchorElement

    row.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(row)

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})
