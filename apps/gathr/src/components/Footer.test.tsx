import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByText('Gathr')).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the newsletter form', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Footer />)
    const socialLinks = screen.getAllByLabelText(/social link/i)
    expect(socialLinks).toHaveLength(4)
  })

  it('renders nav links in copyright bar', () => {
    render(<Footer />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Speakers')).toBeInTheDocument()
  })

  it('renders instagram images', () => {
    render(<Footer />)
    const images = screen.getAllByAltText(/instagram post/i)
    expect(images).toHaveLength(6)
  })

  it('has a footer landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('handles form submission without page reload', () => {
    render(<Footer />)
    const form = screen.getByLabelText(/email/i).closest('form')!
    // The onSubmit handler calls preventDefault, so submitting the form should not throw
    fireEvent.submit(form)
    // Verify the form still exists (no navigation)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })
})
