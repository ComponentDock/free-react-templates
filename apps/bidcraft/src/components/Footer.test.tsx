import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Bidcraft brand', () => {
    render(<Footer />)
    expect(screen.getByText('Bidcraft')).toBeInTheDocument()
  })

  it('renders Solutions column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Solutions' })).toBeInTheDocument()
    expect(screen.getAllByText('Register').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Services column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
  })

  it('renders Contact column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByText('Help Center')).toBeInTheDocument()
    expect(screen.getByText('Support Community')).toBeInTheDocument()
  })

  it('renders the copyright with Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the contentinfo landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders Learn More link', () => {
    render(<Footer />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })
})
