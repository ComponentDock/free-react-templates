import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders all four footer columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Destinations' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Support' })).toBeInTheDocument()
  })

  it('renders the Tidal logo and contact info', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Tidal' })).toBeInTheDocument()
    expect(screen.getByText('+8880 44338899')).toBeInTheDocument()
    expect(screen.getByText('info@tidal.dev')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Tour Packages' })).toBeInTheDocument()
  })

  it('renders destination links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Philippines' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Canada' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Greece' })).toBeInTheDocument()
  })

  it('renders support links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'FAQ' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
  })

  it('renders the Component Dock attribution link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows the current year in the copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} Tidal`))).toBeInTheDocument()
  })
})
