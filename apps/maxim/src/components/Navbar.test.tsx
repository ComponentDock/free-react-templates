import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Maxim')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Practice Areas' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Attorneys' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders the Request a Quote button', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Request a Quote').length).toBeGreaterThanOrEqual(1)
  })

  it('opens and closes mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })

  it('closes mobile menu on Escape key', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    await user.keyboard('{Escape}')
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })

  it('does not close menu on non-Escape key', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    await user.keyboard('{a}')
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileNav = container.querySelector('[aria-label="Mobile navigation"]')!
    const mobileAboutLink = mobileNav.querySelector('a[href="#about-section"]')!
    await user.click(mobileAboutLink)
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })

  it('closes mobile menu when CTA is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileNav = container.querySelector('[aria-label="Mobile navigation"]')!
    // Target the CTA specifically by its rounded-full class (not the plain nav links)
    const ctaLink = mobileNav.querySelector('a.rounded-full')!
    await user.click(ctaLink)
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })
})
