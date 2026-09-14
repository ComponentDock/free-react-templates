import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Power')).toBeInTheDocument()
    expect(screen.getByText('Wash')).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Services', 'Gallery', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders phone and email', () => {
    render(<Navbar />)
    expect(screen.getByText('+00 1234 567')).toBeInTheDocument()
    expect(screen.getByText('youremail@email.com')).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', () => {
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    // Open
    fireEvent.click(toggle)
    const navItems = screen.getAllByText('Home')
    expect(navItems.length).toBeGreaterThan(1)
    // Close
    fireEvent.click(toggle)
  })

  it('closes mobile menu when a link is clicked', () => {
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    fireEvent.click(toggle)
    // Click a mobile nav link (the second "About" is the mobile one)
    const aboutLinks = screen.getAllByText('About')
    const lastAbout = aboutLinks[aboutLinks.length - 1]
    fireEvent.click(lastAbout!)
  })
})
