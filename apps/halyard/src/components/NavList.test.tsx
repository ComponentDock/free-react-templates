import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NAV, NAV_LEFT_ID, NAV_RIGHT_ID, navAll, navGroup } from '../lib/site'
import { NavList } from './NavList'

const leftRows = navGroup('left')
const rightRows = navGroup('right')

describe('NavList — the one list, in both of its presentations', () => {
  it('draws a third of the bar as an inline-block row of three', () => {
    render(<NavList id={NAV_LEFT_ID} items={leftRows} variant="desktop" />)

    const list = screen.getByTestId(NAV_LEFT_ID)

    expect(list.tagName).toBe('UL')
    expect(list.children).toHaveLength(3)
    expect(list.className).toContain('hidden')
    expect(list.className).toContain('lg:block')
    expect(list.className).toContain('list-none')

    for (const row of leftRows) {
      expect(within(list).getByRole('link', { name: row.label })).toHaveAttribute('href', row.href)
    }

    // A row on the bar is a box, never a full-width block: 64px comes from that.
    expect(list.children[0]?.className).toBe('inline-block')
  })

  it('carries the current destination as aria-current and in the brand green', () => {
    render(<NavList id={NAV_RIGHT_ID} items={rightRows} variant="desktop" />)

    const list = screen.getByTestId(NAV_RIGHT_ID)
    const rows = Array.from(list.querySelectorAll('a')) as HTMLAnchorElement[]

    expect(rows.every((row) => row.getAttribute('aria-current') === null)).toBe(true)

    render(<NavList id={NAV_LEFT_ID} items={leftRows} variant="desktop" />)

    const open = screen.getByRole('link', { name: 'Bridge' })

    expect(open).toHaveAttribute('aria-current', 'page')
    expect(open.className).toContain('text-brand')

    const resting = screen.getByRole('link', { name: 'Refits' })

    // The design's own hover rule is dead code, so the lift is restored here.
    expect(resting).not.toHaveAttribute('aria-current')
    expect(resting.className).toContain('text-label')
    expect(resting.className).toContain('hover:text-brand')
  })

  it('reads all six rows top to bottom inside the drawer, in the bar’s own order', () => {
    render(<NavList id="drawer-list" items={navAll()} variant="drawer" />)

    const list = screen.getByTestId('drawer-list')
    const rows = Array.from(list.querySelectorAll('a')) as HTMLAnchorElement[]

    expect(rows).toHaveLength(6)
    expect(rows.map((row) => row.textContent)).toEqual(NAV.map((row) => row.label))
    expect(list.className).toContain('list-none')
    expect(list.className).not.toContain('hidden')
    expect(list.children[0]?.className).toContain('block')
    expect(list.children[0]?.className).toContain('w-full')

    for (const row of rows) {
      expect(row.className).toContain('text-[20px]')
      expect(row.className).toContain('py-[10px]')
    }
  })

  it('folds the drawer away when a destination is chosen there, and not from the bar', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    const { unmount } = render(
      <NavList id="drawer-list" items={navAll()} variant="drawer" onNavigate={onNavigate} />,
    )

    await user.click(screen.getByRole('link', { name: 'Log' }))

    expect(onNavigate).toHaveBeenCalledTimes(1)

    unmount()

    render(<NavList id={NAV_LEFT_ID} items={leftRows} variant="desktop" />)

    // A row on the bar is inert: the bar is always on screen, so nothing folds away.
    await user.click(screen.getByRole('link', { name: 'Rigging' }))

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })

  it('never opens a dropdown, an arrow or a sub-list — the design has none', () => {
    const { container } = render(<NavList id={NAV_LEFT_ID} items={leftRows} variant="desktop" />)

    expect(container.querySelectorAll('ul ul')).toHaveLength(0)
    expect(screen.queryByRole('button')).toBeNull()
    expect(container.querySelectorAll('[aria-haspopup]')).toHaveLength(0)
    expect(container.querySelectorAll('img, svg')).toHaveLength(0)
  })
})
