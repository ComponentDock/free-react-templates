import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Upstart wordmark and the right-aligned desktop menu', () => {
    render(<Navbar />)
    expect(screen.getAllByRole('link', { name: 'Upstart' }).length).toBeGreaterThan(0)
    for (const label of ['Home', 'Portfolio', 'About', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: /Services/ })).toBeInTheDocument()
  })

  it('marks Home as the active link', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
  })

  it('opens the Services dropdown on click and shows all four items', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const services = screen.getByRole('button', { name: /Services/ })
    expect(services).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Web Design')).not.toBeInTheDocument()

    await user.click(services)
    expect(services).toHaveAttribute('aria-expanded', 'true')
    for (const item of ['Web Design', 'WP Development', 'Front End', 'Sub Menu']) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
  })

  it('closes the Services dropdown on a second activation', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const services = screen.getByRole('button', { name: /Services/ })
    await user.click(services)
    expect(screen.getByText('Web Design')).toBeInTheDocument()

    await user.click(services)
    expect(services).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Web Design')).not.toBeInTheDocument()
  })

  it('opens the off-canvas mobile menu with wordmark and close button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    expect(screen.getAllByText('Upstart').length).toBeGreaterThan(1)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    for (const label of ['Home', 'Portfolio', 'About', 'Contact']) {
      expect(within(mobileNav).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('collapses the Services sub-items inside the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const mobileServices = within(mobileNav).getByRole('button', { name: /Services/ })
    expect(mobileServices).toHaveAttribute('aria-expanded', 'false')
    expect(within(mobileNav).queryByText('Web Design')).not.toBeInTheDocument()

    await user.click(mobileServices)
    expect(mobileServices).toHaveAttribute('aria-expanded', 'true')
    expect(within(mobileNav).getAllByText('Web Design').length).toBeGreaterThan(0)
  })

  it('closes the mobile menu via the close button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    await user.click(screen.getByRole('button', { name: 'Close menu' }))

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })

    const clickMobileLink = async (name: string) => {
      await user.click(toggle)
      const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
      const link = within(mobileNav).getByRole('link', { name })
      link.addEventListener('click', (event) => event.preventDefault(), { once: true })
      await user.click(link)
      expect(toggle).toHaveAttribute('aria-expanded', 'false')
      expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
    }

    await clickMobileLink('Home')
    await clickMobileLink('Portfolio')
    await clickMobileLink('About')

    // Sub-menu item inside the collapsible Services group.
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(mobileNav).getByRole('button', { name: /Services/ }))
    const subLink = within(mobileNav).getByRole('link', { name: 'WP Development' })
    subLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(subLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
