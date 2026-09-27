import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByText('Dwelling')).toBeInTheDocument()
  })

  it('renders the about text', () => {
    render(<Footer />)
    expect(screen.getByText(/Discover your perfect property/)).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    const homeLinks = screen.getAllByText('Home')
    expect(homeLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders useful links', () => {
    render(<Footer />)
    expect(screen.getByText('Useful Links')).toBeInTheDocument()
    expect(screen.getByText('Search Properties')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
    expect(screen.getByText('support@dwelling.com')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    const socialLinks = screen.getAllByRole('link', { name: /social link/i })
    expect(socialLinks.length).toBe(4)
  })

  it('renders the copyright', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders More templates text', () => {
    render(<Footer />)
    expect(screen.getByText(/More templates at/)).toBeInTheDocument()
  })
})
