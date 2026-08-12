import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('shows the top info bar with hours and social links', () => {
    render(<Header />)

    expect(screen.getByText('MON - SAT: 6.00 AM - 10.00 PM')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Google Plus')).toBeInTheDocument()
  })

  it('shows the wordmark, main nav links, and consultation button', () => {
    render(<Header />)

    const wordmark = screen.getByRole('link', { name: /Consilio/ })
    expect(wordmark).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(nav).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Home' })[0]).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Portfolio' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Get Free Consultation' })).toBeInTheDocument()
  })

  it('marks the Home link as the active page', () => {
    render(<Header />)

    const homeLink = screen.getAllByRole('link', { name: 'Home' })[0]
    expect(homeLink).toHaveAttribute('aria-current', 'page')
  })

  it('expands and collapses the mobile menu with accessible state', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('toggles dark mode on the document element', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const darkToggle = screen.getByRole('button', { name: 'Switch to dark mode' })
    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(darkToggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: 'Switch to light mode' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Switch to light mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes a dropdown, and closes it when a child link is chosen', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const about = screen.getByRole('button', { name: 'About' })
    expect(about).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'About Us' })).not.toBeInTheDocument()

    await user.click(about)
    expect(about).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Testimonials' })).toBeInTheDocument()

    const child = screen.getByRole('link', { name: 'About Us' })
    child.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(child)
    expect(about).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'About Us' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link, dropdown child, or CTA is chosen', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation menu' })

    await user.click(toggle)
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const home = within(mobile).getByRole('link', { name: 'Home' })
    home.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(home)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(toggle)
    const mobileWithDropdown = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const child = within(mobileWithDropdown).getByRole('link', { name: 'About Us' })
    child.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(child)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(toggle)
    const mobileWithCta = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const cta = within(mobileWithCta).getByRole('link', { name: 'Get Free Consultation' })
    cta.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(cta)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
