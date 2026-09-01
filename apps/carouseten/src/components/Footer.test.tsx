import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the template name', () => {
    render(<Footer />)
    expect(screen.getByText('Carouseten')).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Footer />)
    expect(screen.getByText(/Discover beautiful destinations/i)).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`©\\s+${currentYear}`))).toBeInTheDocument()
  })

  it('renders Component Dock link with correct href', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders Component Dock link text', () => {
    render(<Footer />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
