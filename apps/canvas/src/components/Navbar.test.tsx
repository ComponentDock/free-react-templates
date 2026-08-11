import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NAV_LINKS } from '../data'
import { Navbar } from './Navbar'

const setScrollY = (value: number) => {
  Object.defineProperty(window, 'scrollY', { value, writable: true, configurable: true })
}

afterEach(() => {
  delete (window as { scrollY?: number }).scrollY
  cleanup()
})

describe('Navbar', () => {
  it('renders the uppercase brand and desktop links with Home active at the top', () => {
    setScrollY(0)
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /^Canvas$/ })).toBeInTheDocument()
    for (const link of NAV_LINKS) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'Home' }).className).toContain('text-white')
    expect(screen.getByRole('link', { name: 'About' }).className).toContain('text-white/70')
  })

  it('turns into a fixed white bar with indigo brand and black links when scrolled', () => {
    setScrollY(200)
    render(<Navbar />)
    fireEvent.scroll(window)
    const header = document.querySelector('header')
    expect(header?.className).toContain('fixed')
    expect(header?.className).toContain('bg-white')
    expect(screen.getByRole('link', { name: /^Canvas$/ }).className).toContain('text-brand')
    expect(screen.getByRole('link', { name: 'About' }).className).toContain('text-ink/70')
    expect(screen.getByRole('link', { name: 'Home' }).className).toContain('text-brand')
  })

  it('removes the scroll listener on unmount', () => {
    setScrollY(0)
    const { unmount } = render(<Navbar />)
    unmount()
    expect(screen.queryByRole('link', { name: /^Canvas$/ })).not.toBeInTheDocument()
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
    const mobilePortfolio = screen.getAllByRole('link', { name: 'Portfolio' }).at(-1)
    await user.click(mobilePortfolio!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
