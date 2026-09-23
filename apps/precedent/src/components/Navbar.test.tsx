import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Precedent')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Practice Areas', 'Cases', 'Attorneys', 'Blog', 'Contact']
    for (const link of links) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('has correct anchor hrefs', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toHaveAttribute('href', '#home')
    expect(screen.getByText('Practice Areas')).toHaveAttribute('href', '#practice-areas')
  })

  it('has aria-label on nav', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
  })

  it('shows mobile toggle button', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Toggle navigation menu')).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation menu')

    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation menu')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const homeLinks = screen.getAllByText('Home')
    const mobileHomeLink = homeLinks[homeLinks.length - 1]!
    await user.click(mobileHomeLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('applies scrolled class on scroll', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    // Initially not scrolled
    expect(nav.className).toContain('bg-[#333333]/90')
    // Simulate scroll
    fireEvent.scroll(window, { target: { scrollY: 100 } })
    expect(nav.className).toContain('bg-[#333333]')
  })
})
