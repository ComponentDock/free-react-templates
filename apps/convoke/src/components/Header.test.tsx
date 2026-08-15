import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 1024,
    })
  })

  it('renders the brand, nav links, and Buy Ticket CTA', () => {
    render(<Header />)
    expect(screen.getByText('Convoke')).toBeInTheDocument()
    for (const label of ['Home', 'Schedule', 'Blog', 'Speakers', 'Venue', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('link', { name: 'Buy Ticket' })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 375,
    })
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(mobileNav).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is clicked', async () => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 375,
    })
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    for (const label of ['Home', 'Schedule', 'Blog', 'Speakers', 'Venue', 'Contact']) {
      expect(within(mobileNav).getByRole('link', { name: label })).toBeInTheDocument()
    }
    const scheduleLink = within(mobileNav).getByRole('link', { name: 'Schedule' })
    scheduleLink.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(scheduleLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the Buy Ticket link is clicked', async () => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 375,
    })
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileTicket = screen.getAllByRole('link', { name: 'Buy Ticket' })[1]!
    mobileTicket.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(mobileTicket)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
