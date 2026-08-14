import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the wordmark with a pink dot and the desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /^Compass\.$/ })).toHaveAttribute('href', '#home')

    const desktopNav = screen.getByRole('navigation', { name: 'Main navigation', hidden: true })
    expect(within(desktopNav).getAllByRole('link')).toHaveLength(7)
  })

  it('marks the active (Home) link pink and gives it aria-current', () => {
    render(<Navbar />)
    const desktopNav = screen.getByRole('navigation', { name: 'Main navigation', hidden: true })
    const home = within(desktopNav).getByRole('link', { name: 'Home' })
    expect(home).toHaveAttribute('aria-current', 'true')
    expect(home).toHaveClass('text-brand')

    const about = within(desktopNav).getByRole('link', { name: 'About Us' })
    expect(about).not.toHaveAttribute('aria-current')
    expect(about).toHaveClass('text-ink')
  })

  it('starts transparent and turns white with a shadow after scrolling', () => {
    render(<Navbar />)
    const header = screen.getByTestId('navbar')
    expect(header).not.toHaveClass('bg-white')
    expect(header).toHaveClass('bg-transparent')

    Object.defineProperty(window, 'scrollY', { value: 200, writable: true, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveClass('bg-white')
    expect(header).not.toHaveClass('bg-transparent')
  })

  it('opens and closes the mobile menu via the hamburger toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)

    const closeToggle = screen.getByRole('button', { name: 'Close menu' })
    expect(closeToggle).toHaveAttribute('aria-expanded', 'true')

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getAllByRole('link')).toHaveLength(7)

    await user.click(closeToggle)
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const team = within(mobileNav).getByRole('link', { name: 'Team' })
    team.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(team)

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('removes the scroll listener on unmount', () => {
    const { unmount } = render(<Navbar />)
    unmount()
    expect(() => fireEvent.scroll(window)).not.toThrow()
  })
})
