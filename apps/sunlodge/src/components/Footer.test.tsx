import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { describe, expect, it } from 'vitest'

describe('Footer', () => {
  it('renders the Sunlodge logo', () => {
    render(<Footer />)
    expect(screen.getByText('Sunlodge')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Our Rooms')).toBeInTheDocument()
    expect(screen.getByText('Book A Room')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Privacy & Policy')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders address and contact info', () => {
    render(<Footer />)
    expect(screen.getByText('76/A, Green Lane, Dhanmondi, NYC')).toBeInTheDocument()
    expect(screen.getByText('+1 (87) 738-3940')).toBeInTheDocument()
    expect(screen.getByText('contact@sunlodge.com')).toBeInTheDocument()
  })

  it('renders Component Dock attribution', () => {
    render(<Footer />)
    const links = screen.getAllByText('Component Dock')
    expect(links.length).toBeGreaterThanOrEqual(1)
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    })
  })

  it('renders social media icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
  })

  it('renders copyright line', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument()
  })
})
