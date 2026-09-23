import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo and company description', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Chamfer/i })).toBeInTheDocument()
    expect(screen.getByText(/We create modern, first-class interior spaces/)).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/\+1 \(212\) 555-0199/)).toBeInTheDocument()
    expect(screen.getByText(/info@chamferstudio.com/)).toBeInTheDocument()
  })

  it('renders office addresses', () => {
    render(<Footer />)
    expect(screen.getByText('New York')).toBeInTheDocument()
    expect(screen.getByText('Tokyo')).toBeInTheDocument()
    expect(screen.getByText(/123 Design Ave/)).toBeInTheDocument()
    expect(screen.getByText(/4-2-8 Roppongi/)).toBeInTheDocument()
  })

  it('renders social media icon links', () => {
    render(<Footer />)
    // The social links have exact aria-labels
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Website' })).toBeInTheDocument()
    // Use exact match to avoid matching Instagram post image links
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('includes Component Dock attribution', () => {
    render(<Footer />)
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('displays the Instagram feed grid with 6 images', () => {
    render(<Footer />)
    const igImages = screen.getAllByAltText(/Instagram post/i)
    expect(igImages.length).toBe(6)
  })
})
