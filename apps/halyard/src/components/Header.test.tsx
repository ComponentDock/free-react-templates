import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  DRAWER_CLOSE_LABEL,
  DRAWER_ID,
  DRAWER_NAV_ID,
  MENU_LABEL,
  NAV_LEFT_ID,
  NAV_RIGHT_ID,
  SITE_NAME,
  navGroup,
} from '../lib/site'
import { Header } from './Header'

describe('Header — the solid bar, its three columns and the panel it mounts', () => {
  it('is a banner holding one container and one row', () => {
    render(<Header />)

    const banner = screen.getByRole('banner')

    expect(banner.tagName).toBe('HEADER')
    expect(banner.className).toContain('relative')
    expect(banner.className).toContain('bg-white')
    expect(banner.className).toContain('w-full')

    const row = screen.getByTestId('header-row')

    expect(banner.firstElementChild?.className).toContain('mx-auto')
    expect(row.parentElement).toBe(banner.firstElementChild)
    expect(row.className).toContain('flex')
    expect(row.className).toContain('flex-wrap')
  })

  it('never pins the bar: it is opaque, in the flow and has no second row', () => {
    render(<Header />)

    const banner = screen.getByRole('banner')

    // 16px of padding either side of the row: 96px around a 64px row from 992px up.
    expect(banner.className).toContain('px-4')
    expect(banner.className).toContain('py-4')
    expect(banner.className).toContain('z-[1999]')
    expect(banner.className).not.toMatch(/sticky|fixed|absolute|top-/)
    expect(banner.querySelectorAll('nav')).toHaveLength(2)
  })

  it('splits the six destinations into two thirds around a centred wordmark', () => {
    render(<Header />)

    const row = screen.getByTestId('header-row')
    const columns = Array.from(row.children) as HTMLElement[]

    expect(columns).toHaveLength(4)

    // document order: the left group, the wordmark's column, the right group, the hamburger
    expect(columns[0]?.tagName).toBe('NAV')
    expect(columns[0]?.className).toContain('text-right')
    expect(within(columns[0]!).getByTestId(NAV_LEFT_ID).children).toHaveLength(3)

    expect(columns[1]?.getAttribute('data-testid')).toBe('wordmark-column')
    expect(columns[1]?.className).toContain('text-left')
    expect(columns[1]?.className).toContain('lg:text-center')
    expect(columns[1]?.className).toContain('w-full')

    expect(columns[2]?.className).toContain('text-left')
    expect(within(columns[2]!).getByTestId(NAV_RIGHT_ID).children).toHaveLength(3)

    expect(columns[3]?.className).toContain('absolute')
    expect(columns[3]?.className).toContain('right-0')
    expect(columns[3]?.className).toContain('lg:hidden')
  })

  it('hands the two groups over to the drawer below 992px', () => {
    render(<Header />)

    for (const id of [NAV_LEFT_ID, NAV_RIGHT_ID]) {
      const list = screen.getByTestId(id)

      expect(list.className).toContain('hidden')
      expect(list.className).toContain('lg:block')
    }

    // The panel itself is always in the document — it is parked, not unmounted.
    expect(screen.getByTestId('drawer-panel')).toHaveClass('translate-x-[110%]')
    expect(screen.queryByTestId(DRAWER_NAV_ID)).toBeNull()
  })

  it('lets the wordmark centre on the page, between the two thirds', () => {
    render(<Header />)

    const wordmark = screen.getByRole('link', { name: SITE_NAME })

    expect(wordmark).toHaveAttribute('href', '#top')
    expect(wordmark.className).toContain('lowercase')
  })

  it('opens the drawer from the hamburger and takes it back down again', async () => {
    const user = userEvent.setup()

    render(<Header />)

    const toggle = screen.getByRole('button', { name: MENU_LABEL })

    expect(toggle).toHaveAttribute('aria-controls', DRAWER_ID)
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-labelledby', toggle.id)

    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByTestId(DRAWER_NAV_ID).children).toHaveLength(6)
    expect(screen.getByRole('banner')).toHaveClass('bg-white')

    await user.click(screen.getByRole('button', { name: DRAWER_CLOSE_LABEL }))

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByTestId(DRAWER_NAV_ID)).toBeNull()
  })

  it('keeps the bar’s own third of the model in the order it is written', () => {
    render(<Header />)

    const left = Array.from(screen.getByTestId(NAV_LEFT_ID).querySelectorAll('a'))
    const right = Array.from(screen.getByTestId(NAV_RIGHT_ID).querySelectorAll('a'))

    expect(left.map((row) => row.textContent)).toEqual(navGroup('left').map((row) => row.label))
    expect(right.map((row) => row.textContent)).toEqual(navGroup('right').map((row) => row.label))
  })
})
