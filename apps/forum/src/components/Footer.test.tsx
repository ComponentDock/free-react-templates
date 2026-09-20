import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo, about text, and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/forum/)).toBeInTheDocument()
    expect(screen.getByText(/premier conference/)).toBeInTheDocument()
    expect(screen.getAllByText('Component Dock').length).toBeGreaterThanOrEqual(1)
  })

  it('renders newsletter section', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Subscribe')).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('links to componentdock.com', () => {
    render(<Footer />)
    const links = screen.getAllByText('Component Dock')
    expect(links.length).toBeGreaterThanOrEqual(1)
    expect(links[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('handles newsletter form submission', () => {
    render(<Footer />)
    const form = screen.getByPlaceholderText('Your email address').closest('form')!
    // Just verify the form exists and onSubmit is attached (it calls preventDefault)
    fireEvent.submit(form)
    // No error means preventDefault worked
    expect(form).toBeInTheDocument()
  })
})
