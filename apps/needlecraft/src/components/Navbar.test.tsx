import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name with teal dot', () => {
    render(<Navbar />)
    const brand = screen.getAllByText(/Needlecraft/)[0]
    expect(brand).toBeInTheDocument()
    expect(screen.getByText('.')).toHaveClass('text-brand')
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'Services', 'Testimonials', 'Blog', 'About', 'Contact']) {
      expect(screen.getAllByText(link).length).toBeGreaterThan(0)
    }
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Close menu')).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    // Use the mobile drawer link (second "Services" — first is desktop hidden on mobile but still in DOM)
    const servicesLinks = screen.getAllByText('Services')
    const lastLink = servicesLinks.at(-1)
    if (lastLink) await user.click(lastLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
