import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    vi.stubGlobal('scrollY', 0)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Civic')).toBeInTheDocument()
    expect(screen.getByText('Pulse')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    const labels = ['Home', 'About', 'Service', 'Team', 'Blog', 'Elements', 'Contact']
    for (const label of labels) {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders Donate Now button', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Donate Now').length).toBeGreaterThanOrEqual(1)
  })

  it('renders mobile menu toggle', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('opens mobile menu on click', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByLabelText('Open menu'))
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
  })

  it('closes mobile menu on click', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByLabelText('Open menu'))
    fireEvent.click(screen.getByLabelText('Close menu'))
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('clicking a mobile menu link closes the menu', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByLabelText('Open menu'))
    // The mobile nav should be visible - click a link in it
    // Use getAllByText to find links, pick the mobile one
    const aboutLinks = screen.getAllByText('About')
    // The mobile link is the last one (or the one inside the mobile nav)
    const mobileAbout = aboutLinks[aboutLinks.length - 1]!
    fireEvent.click(mobileAbout)
    // Menu should close
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('scroll event triggers sticky shadow', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    fireEvent.scroll(window)
    expect(nav.className).toContain('shadow-md')
  })
})
