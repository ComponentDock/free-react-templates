import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About column', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders the Categories and More columns', () => {
    render(<Footer />)
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getByText('More')).toBeInTheDocument()
  })

  it('renders the Quick Links column', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
  })

  it('renders footer links', () => {
    render(<Footer />)
    expect(screen.getByText('Our Story')).toBeInTheDocument()
    expect(screen.getByText('Mission')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('International Editions')).toBeInTheDocument()
  })

  it('renders the copyright bar with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText((content) => content.includes(String(year)))).toBeInTheDocument()
  })

  it('renders the Component Dock credit link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the dark footer background', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-ink')
  })
})
