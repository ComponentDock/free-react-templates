import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Programs')).toBeInTheDocument()
    expect(screen.getByText('Teachers')).toBeInTheDocument()
    expect(screen.getByText('Events')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Tadpole')).toBeInTheDocument()
  })

  it('renders the Enroll Now button', () => {
    render(<Navbar />)
    expect(screen.getByText('Enroll Now')).toBeInTheDocument()
  })

  it('toggles mobile menu on click', () => {
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation menu')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a link is clicked', () => {
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation menu')
    fireEvent.click(toggle)
    const mobileLinks = screen.getAllByText('Home')
    fireEvent.click(mobileLinks[1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when Enroll Now is clicked', () => {
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation menu')
    fireEvent.click(toggle)
    const enrollButtons = screen.getAllByText('Enroll Now')
    fireEvent.click(enrollButtons[1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('applies shadow on scroll', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    expect(nav.className).toContain('bg-white/95')
    fireEvent.scroll(window, { target: { scrollY: 200 } })
    expect(nav.className).toContain('bg-white shadow-md')
  })
})
