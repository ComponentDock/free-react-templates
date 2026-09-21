import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer with about, contact, and opening hours columns', () => {
    render(<Footer />)

    expect(screen.getByText('Feastly')).toBeInTheDocument()
    expect(screen.getByText(/Contact Us/)).toBeInTheDocument()
    expect(screen.getByText(/Opening Hours/)).toBeInTheDocument()
  })

  it('displays contact information', () => {
    render(<Footer />)

    expect(screen.getByText(/1234 Culinary Ave/)).toBeInTheDocument()
    expect(screen.getByText('(800) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('info@feastly.com')).toBeInTheDocument()
  })

  it('displays opening hours', () => {
    render(<Footer />)

    expect(screen.getByText(/Monday .* Closed/)).toBeInTheDocument()
    expect(screen.getByText(/Tue–Fri/)).toBeInTheDocument()
    expect(screen.getByText(/Sat–Sun/)).toBeInTheDocument()
  })

  it('links to Component Dock in the copyright bar', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('shows the current year in the copyright', () => {
    render(<Footer />)

    expect(
      screen.getByText(new RegExp(`© ${new Date().getFullYear()} Feastly`)),
    ).toBeInTheDocument()
  })

  it('renders social media icon links', () => {
    render(<Footer />)

    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
