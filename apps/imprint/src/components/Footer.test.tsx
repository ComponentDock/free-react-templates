import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Imprint' })).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders the contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St. Mountain View/)).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/ })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the Made with line', () => {
    render(<Footer />)
    expect(screen.getByText(/Made with/)).toBeInTheDocument()
  })
})
