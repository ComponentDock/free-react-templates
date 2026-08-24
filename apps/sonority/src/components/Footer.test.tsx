import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Sonority logo', () => {
    render(<Footer />)
    expect(screen.getAllByText('Sonority').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the description text', () => {
    render(<Footer />)
    expect(screen.getByText(/Sonority is a seamless integration/)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })

  it('renders Quick Links column', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getAllByText('Work').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Services').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Support column', () => {
    render(<Footer />)
    expect(screen.getByText('Support')).toBeInTheDocument()
  })

  it('renders Navigation column', () => {
    render(<Footer />)
    expect(screen.getByText('Navigation')).toBeInTheDocument()
  })

  it('renders the copyright line with Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the contentinfo landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
