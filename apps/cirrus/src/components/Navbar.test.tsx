import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand wordmark', () => {
    render(<Navbar />)
    expect(screen.getByText('Cirrus')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('Leadership')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the Get started CTA button', () => {
    render(<Navbar />)
    expect(screen.getByText('Get started')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    // Mobile links visible
    const mobileLinks = screen.getAllByText('Home')
    expect(mobileLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('closes mobile menu when link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    // Click a mobile link
    const companyLinks = screen.getAllByText('Company')
    const lastCompanyLink = companyLinks[companyLinks.length - 1]
    expect(lastCompanyLink).toBeDefined()
    await user.click(lastCompanyLink!)
    // Menu closed — toggle should say "Open menu" again
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    // Click the mobile Get started CTA
    const ctaLinks = screen.getAllByText('Get started')
    const lastCta = ctaLinks[ctaLinks.length - 1]
    expect(lastCta).toBeDefined()
    await user.click(lastCta!)
    // Menu closed
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('has aria-expanded on toggle button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
