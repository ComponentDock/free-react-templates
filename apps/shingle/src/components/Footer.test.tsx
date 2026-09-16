import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Shingle' })).toBeInTheDocument()
  })

  it('links to componentdock.com', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('shows business hours', () => {
    render(<Footer />)
    expect(screen.getByText(/Monday – Friday/i)).toBeInTheDocument()
    expect(screen.getByText(/Saturday/i)).toBeInTheDocument()
    expect(screen.getByText(/Sunday: Closed/i)).toBeInTheDocument()
  })

  it('shows contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/123 Roof Street/i)).toBeInTheDocument()
    expect(screen.getByText(/\+1 \(555\) 123-4567/)).toBeInTheDocument()
    expect(screen.getByText(/info@shingle\.com/)).toBeInTheDocument()
  })

  it('renders service links', () => {
    render(<Footer />)
    expect(screen.getByText('Skylights')).toBeInTheDocument()
    expect(screen.getByText('Waterproofing')).toBeInTheDocument()
    expect(screen.getByText('Commercial Roofing')).toBeInTheDocument()
  })
})
