import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Fin')).toBeInTheDocument()
    expect(screen.getByText('Pilot')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Pages')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Get a Quote button', () => {
    render(<Navbar />)
    expect(screen.getByText('Get a Quote')).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('renders top bar contact info', () => {
    render(<Navbar />)
    expect(screen.getByText('info@finpilot.com')).toBeInTheDocument()
    expect(screen.getByText('+1 234 567 89')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Google+')).toBeInTheDocument()
  })

  it('becomes sticky on scroll', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('fixed')
    // Simulate scroll past threshold
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-white')
  })
})
