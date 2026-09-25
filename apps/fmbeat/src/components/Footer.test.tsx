import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('has testid footer', () => {
    render(<Footer />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders four widget columns', () => {
    render(<Footer />)
    expect(screen.getByText('Locations')).toBeInTheDocument()
    expect(screen.getByText('Top Shows')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders city locations', () => {
    render(<Footer />)
    expect(screen.getByText('Berlin')).toBeInTheDocument()
    expect(screen.getByText('London')).toBeInTheDocument()
  })

  it('renders top shows list', () => {
    render(<Footer />)
    expect(screen.getByText(/Friday Night Mix/i)).toBeInTheDocument()
    expect(screen.getByText(/Saturday Sessions/i)).toBeInTheDocument()
  })

  it('renders blog items', () => {
    render(<Footer />)
    expect(screen.getByText(/New Releases This Week/i)).toBeInTheDocument()
    expect(screen.getByText(/Behind the Decks/i)).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText(/123 FM Street/i)).toBeInTheDocument()
    expect(screen.getByText(/\+1 234 567 890/i)).toBeInTheDocument()
    expect(screen.getByText(/info@fmbeat\.com/i)).toBeInTheDocument()
  })

  it('renders Component Dock attribution in footer bottom', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/Made with/)).toBeInTheDocument()
  })
})
