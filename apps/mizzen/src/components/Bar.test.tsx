import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Bar } from './Bar'
import {
  DESKTOP_NAV_ID,
  MENU,
  MENU_AFTER_ROW,
  MENU_LABEL,
  NAV,
  PANEL_ID,
  TOGGLER_LABEL,
} from '../lib/site'
import { barClass, barContainerClass, navListClass, navWrapClass } from '../lib/styles'

describe('Bar — the dark band under the chrome row', () => {
  it('stays in the flow, dark on wide viewports and black once its rows fold away', () => {
    render(<Bar />)

    const bar = screen.getByTestId('bar')

    expect(bar.className).toBe(barClass)
    expect(bar.className).toContain('bg-bar')
    expect(bar.className).toContain('max-lg:bg-black')
    expect(bar.className).toContain('p-0')
    expect(bar.className).toContain('max-lg:p-[10px_15px]')
    expect(bar.className).toContain('z-[3]')
    expect(bar.className).toContain('relative')
    expect(bar.className).not.toMatch(/sticky|fixed/)
    expect(bar.className).not.toContain('shadow')
    expect(bar.className).not.toContain('mx-auto')
  })

  it('puts the toggler first, in front of the list it opens', () => {
    render(<Bar />)

    const row = screen.getByTestId('bar-row')

    expect(row.className).toContain('lg:flex-nowrap')
    expect(row.children[0]).toBe(screen.getByRole('button', { name: TOGGLER_LABEL }))
    expect(row.children[1]).toBe(screen.getByTestId(DESKTOP_NAV_ID))
    expect(barContainerClass).toContain('max-lg:px-0')
    expect(barContainerClass).toContain('px-[15px]')
  })

  it('centres its own list inside the band with an auto margin', () => {
    render(<Bar />)

    const list = within(screen.getByTestId(DESKTOP_NAV_ID)).getByRole('list')

    expect(screen.getByTestId(DESKTOP_NAV_ID).className).toBe(navWrapClass)
    expect(screen.getByTestId(DESKTOP_NAV_ID).className).toContain('lg:grow')
    expect(list.className).toBe(navListClass)
    expect(list.className).toContain('m-auto')
    expect(list.className).toContain('lg:flex-row')
    expect(list.children).toHaveLength(NAV.length + 1)
  })

  it('carries no brand and no search field of its own', () => {
    render(<Bar />)

    const bar = screen.getByTestId('bar')

    expect(within(bar).queryByTestId('wordmark')).toBeNull()
    expect(within(bar).queryByRole('searchbox')).toBeNull()
    expect(within(bar).queryByTestId('search')).toBeNull()
  })

  it('walks the design’s own five rows, with the menu row second', () => {
    render(<Bar />)

    const list = within(screen.getByTestId(DESKTOP_NAV_ID)).getByRole('list')
    const rows = Array.from(list.children)

    expect(rows[MENU_AFTER_ROW]?.textContent).toBe(NAV[0]?.label)
    expect(within(rows[MENU_AFTER_ROW + 1] as HTMLElement).getByRole('button')).toHaveAccessibleName(
      MENU_LABEL,
    )
    expect(rows.slice(MENU_AFTER_ROW + 2).map((row) => row.textContent)).toEqual(
      NAV.slice(1).map((item) => item.label),
    )
    expect(within(screen.getByTestId(DESKTOP_NAV_ID)).getAllByRole('link')).toHaveLength(NAV.length)
    expect(MENU).toHaveLength(4)
  })

  it('folds the panel open under the bar’s own chrome, and away again', async () => {
    const user = userEvent.setup()

    render(<Bar />)

    const toggler = screen.getByRole('button', { name: TOGGLER_LABEL })

    expect(screen.queryByTestId('panel')).toBeNull()
    expect(document.getElementById(PANEL_ID)).not.toBeNull()

    await user.click(toggler)

    expect(toggler).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByTestId('panel')).toBeInTheDocument()

    await user.click(toggler)

    expect(toggler).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByTestId('panel')).toBeNull()
  })

  it('leaves the wide list alone when a row inside the panel is followed', async () => {
    const user = userEvent.setup()

    render(<Bar />)

    await user.click(screen.getByRole('button', { name: TOGGLER_LABEL }))

    const row = within(screen.getByTestId('panel')).getAllByRole('link')[1] as HTMLAnchorElement

    row.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(row)

    expect(screen.getByTestId(DESKTOP_NAV_ID)).toBeInTheDocument()
  })
})
