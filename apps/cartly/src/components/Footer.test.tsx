import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders footer column headings', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Cartly/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Useful Links/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^Products$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Follow Us/i })).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
  })

  it('renders footer bottom with copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument()
    expect(screen.getByText(/Terms of Service/i)).toBeInTheDocument()
  })
})
