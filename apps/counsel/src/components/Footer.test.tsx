import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, Practice Areas, Business Hours, and Contact Info columns', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Counsel' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Practice Areas' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Business Hours' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()

    expect(screen.getByText('+1 (800) 555-1234')).toBeInTheDocument()
    expect(screen.getByText('info@counsel.com')).toBeInTheDocument()
  })

  it('shows social media links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Website' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Email' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Share' })).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows the current year in the copyright line', () => {
    render(<Footer />)

    expect(
      screen.getByText(new RegExp(`© ${new Date().getFullYear()} Counsel`)),
    ).toBeInTheDocument()
  })
})
