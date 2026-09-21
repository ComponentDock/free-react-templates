import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name Luma', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Luma')).toBeDefined()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'Gallery', 'Services', 'Blog', 'About', 'Reviews', 'Contact']
    for (const label of links) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0)
    }
  })

  it('renders social icon links', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Facebook')).toBeDefined()
    expect(screen.getByLabelText('Twitter')).toBeDefined()
    expect(screen.getByLabelText('Instagram')).toBeDefined()
    expect(screen.getByLabelText('YouTube')).toBeDefined()
  })

  it('has a mobile toggle button', () => {
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    expect(toggle).toBeDefined()
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
  })

  it('toggles mobile menu on click', () => {
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    // Menu not visible initially (desktop hidden, mobile not rendered)
    fireEvent.click(toggle)
    expect(toggle.getAttribute('aria-expanded')).toBe('true')
    // Mobile nav links should now appear
    const mobileLinks = screen.getAllByText('Home')
    expect(mobileLinks.length).toBeGreaterThan(1)
    // Click again to close
    fireEvent.click(toggle)
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
  })

  it('closes mobile menu when a nav link is clicked', () => {
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    fireEvent.click(toggle)
    expect(toggle.getAttribute('aria-expanded')).toBe('true')
    // Find a mobile menu link (second "Home" in the DOM) and click it
    const homeLinks = screen.getAllByText('Home')
    // The second Home is in the mobile menu
    fireEvent.click(homeLinks[1]!)
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
  })
})
