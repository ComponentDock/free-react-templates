import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Meetup')).toBeInTheDocument()
    expect(screen.getByText('ly')).toBeInTheDocument()
  })

  it('renders Useful Links', () => {
    render(<Footer />)
    expect(screen.getByText('Useful Links')).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Speakers', 'Schedule', 'Blog']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('renders Have a Questions section', () => {
    render(<Footer />)
    expect(screen.getByText('Have a Questions?')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText(/Manhattan, Convention Center/)).toBeInTheDocument()
    expect(screen.getByText('+63 917 123 4567')).toBeInTheDocument()
    expect(screen.getByText('info@meetuply.com')).toBeInTheDocument()
  })

  it('links to componentdock.com', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the Component Dock line', () => {
    render(<Footer />)
    expect(screen.getByText(/More templates at/)).toBeInTheDocument()
  })

  it('has dark background', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toHaveClass('bg-charcoal')
  })
})
