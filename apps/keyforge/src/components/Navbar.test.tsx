import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('KeyForge')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'About', 'Services', 'Shop', 'Pages', 'News', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders the phone CTA on desktop', () => {
    render(<Navbar />)
    expect(screen.getByText('1234 5678 90')).toBeInTheDocument()
  })

  it('links to the homepage', () => {
    render(<Navbar />)
    const brandLink = screen.getByText('KeyForge').closest('a')
    expect(brandLink).toHaveAttribute('href', '#')
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
