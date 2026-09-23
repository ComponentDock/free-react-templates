import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Atelier')).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: /primary/i })
    expect(nav).toHaveTextContent('Home')
    expect(nav).toHaveTextContent('About')
    expect(nav).toHaveTextContent('Services')
    expect(nav).toHaveTextContent('Blog')
    expect(nav).toHaveTextContent('Contact')
  })

  it('renders Get Started CTA links', () => {
    render(<Navbar />)
    const ctaLinks = screen.getAllByRole('link', { name: /Get Started/i })
    expect(ctaLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('hides the mobile menu initially and toggles it open/closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')

    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(document.getElementById('mobile-menu')).not.toHaveClass('hidden')

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(document.getElementById('mobile-menu')).not.toHaveClass('hidden')

    const mobileLinks = screen.getAllByRole('link', { name: 'Home' })
    await user.click(mobileLinks[mobileLinks.length - 1]!)
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })

  it('closes mobile menu when CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const ctaLinks = screen.getAllByRole('link', { name: 'Get Started' })
    await user.click(ctaLinks[ctaLinks.length - 1]!)
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })
})
