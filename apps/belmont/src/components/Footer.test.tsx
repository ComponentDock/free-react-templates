import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Belmont brand', () => {
    render(<Footer />)
    expect(screen.getByText('Belmont')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Rooms' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'News' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/1610 5th Avenue/i)).toBeInTheDocument()
    expect(screen.getByText(/\+1 555 123 4567/i)).toBeInTheDocument()
    expect(screen.getByText(/info@belmont.com/i)).toBeInTheDocument()
  })

  it('renders Component Dock attribution link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 Belmont/i)).toBeInTheDocument()
  })
})
