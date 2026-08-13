import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BRAND, NAV_LEFT, NAV_RIGHT } from '../data'
import { Navbar } from './Navbar'

const setScrollY = (value: number) => {
  Object.defineProperty(window, 'scrollY', { value, writable: true, configurable: true })
}

afterEach(() => {
  delete (window as { scrollY?: number }).scrollY
  cleanup()
})

describe('Navbar', () => {
  it('renders the centered lowercase brand and split desktop links at the top', () => {
    setScrollY(0)
    render(<Navbar />)

    const brand = screen.getByRole('link', { name: BRAND })
    expect(brand.className).toContain('text-brand')
    expect(brand.className).toContain('lowercase')

    const primary = screen.getByRole('navigation', { name: 'Primary' })
    for (const link of NAV_LEFT) {
      expect(within(primary).getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    const secondary = screen.getByRole('navigation', { name: 'Secondary' })
    for (const link of NAV_RIGHT) {
      expect(within(secondary).getByRole('link', { name: link.label })).toBeInTheDocument()
    }

    const home = within(primary).getByRole('link', { name: 'Home' })
    expect(home).toHaveAttribute('aria-current', 'page')
    expect(home.className).toContain('text-brand')
    expect(within(secondary).getByRole('link', { name: 'About' }).className).toContain(
      'text-white/70',
    )
  })

  it('turns into a fixed white bar with black links and a green active link when scrolled', () => {
    setScrollY(200)
    render(<Navbar />)
    fireEvent.scroll(window)

    const header = document.querySelector('header')
    expect(header?.className).toContain('fixed')
    expect(header?.className).toContain('bg-white')

    expect(screen.getByRole('link', { name: BRAND }).className).toContain('text-brand')
    const secondary = screen.getByRole('navigation', { name: 'Secondary' })
    expect(within(secondary).getByRole('link', { name: 'About' }).className).toContain(
      'text-ink/70',
    )
    const primary = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(primary).getByRole('link', { name: 'Home' }).className).toContain('text-brand')
  })

  it('removes the scroll listener on unmount', () => {
    setScrollY(0)
    const { unmount } = render(<Navbar />)
    unmount()
    expect(screen.queryByRole('link', { name: BRAND })).not.toBeInTheDocument()
  })

  it('opens and closes the mobile off-canvas menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    // Desktop + mobile navs render duplicate links — pick the mobile one (last).
    const mobileHome = screen.getAllByRole('link', { name: 'Home' }).at(-1)
    await user.click(mobileHome!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
