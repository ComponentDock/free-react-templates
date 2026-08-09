import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

afterEach(() => {
  window.localStorage.clear()
  document.documentElement.classList.remove('dark')
})

describe('Navbar', () => {
  it('renders the brand, nav links, CTA, and dark-mode toggle in a sticky header', () => {
    const { container } = render(<Navbar />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /helios home/i })).toBeInTheDocument()
    for (const label of ['About', 'Products', 'Services', 'Pricing', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getAllByRole('link', { name: 'Get Free Quote' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
    expect(container.querySelector('header')).toHaveClass('sticky')
  })

  it('toggles dark mode and persists the choice to localStorage', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('helios-dark')).toBe('1')
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('helios-dark')).toBe('0')
  })

  it('restores a previously stored dark preference on mount', () => {
    window.localStorage.setItem('helios-dark', '1')
    render(<Navbar />)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('removes the dark class from the document element on unmount', () => {
    const { unmount } = render(<Navbar />)
    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes the mobile menu with aria-expanded state', async () => {
    const user = userEvent.setup()
    const { container } = render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: 'Toggle mobile menu' })
    const mobileMenu = container.querySelector('#mobile-menu')!
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(mobileMenu).toHaveClass('hidden')
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(mobileMenu).not.toHaveClass('hidden')
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(mobileMenu).toHaveClass('hidden')
  })

  it('closes the mobile menu when a link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    // last match = the mobile-menu link (desktop links have no close handler)
    const links = screen.getAllByRole('link', { name: 'About' })
    await user.click(links[links.length - 1]!)
    expect(screen.getByRole('button', { name: 'Toggle mobile menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('ignores non-Escape keys while the mobile menu is open', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    await user.keyboard('{a}')
    expect(screen.getByRole('button', { name: 'Toggle mobile menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('closes the mobile menu when Escape is pressed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    expect(screen.getByRole('button', { name: 'Toggle mobile menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: 'Toggle mobile menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile menu when a service link or the CTA is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    const serviceLinks = screen.getAllByRole('link', { name: 'Battery Storage' })
    await user.click(serviceLinks[serviceLinks.length - 1]!)
    expect(screen.getByRole('button', { name: 'Toggle mobile menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    await user.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    const ctas = screen.getAllByRole('link', { name: 'Get Free Quote' })
    await user.click(ctas[ctas.length - 1]!)
    expect(screen.getByRole('button', { name: 'Toggle mobile menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('opens and closes the Services dropdown', async () => {
    const user = userEvent.setup()
    const { container } = render(<Navbar />)
    const servicesButton = screen.getByRole('button', { name: /services/i })
    expect(container.querySelector('#services-dropdown')).not.toBeInTheDocument()
    await user.click(servicesButton)
    expect(servicesButton).toHaveAttribute('aria-expanded', 'true')
    const dropdown = container.querySelector('#services-dropdown') as HTMLElement
    expect(within(dropdown).getByRole('link', { name: 'Residential Solar' })).toBeInTheDocument()
    await user.click(within(dropdown).getByRole('link', { name: 'Battery Storage' }))
    expect(servicesButton).toHaveAttribute('aria-expanded', 'false')
  })
})
