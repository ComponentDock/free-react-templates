import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Pulse brand', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Pulse.' })).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Footer />)
    expect(screen.getByText(/We are a digital agency/i)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('target', '_blank')
    }
  })

  it('renders recent posts', () => {
    render(<Footer />)
    expect(screen.getByText('Digital Marketing Trends')).toBeInTheDocument()
    expect(screen.getByText('Web Design Best Practices')).toBeInTheDocument()
    expect(screen.getByText('Brand Strategy Guide')).toBeInTheDocument()
  })

  it('renders services links', () => {
    render(<Footer />)
    expect(screen.getByText('Creative Design')).toBeInTheDocument()
    expect(screen.getByText('Digital Marketing')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Branding')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/123 Business Ave/i)).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('hello@pulse.agency')).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the powered by text', () => {
    render(<Footer />)
    expect(screen.getByText('Powered by')).toBeInTheDocument()
  })
})
