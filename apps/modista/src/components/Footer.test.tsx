import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders five column headings', () => {
    render(<Footer />)
    expect(screen.getByText('Information')).toBeInTheDocument()
    expect(screen.getByText('Customer Service')).toBeInTheDocument()
    expect(screen.getByText('Extras')).toBeInTheDocument()
    expect(screen.getByText('My Account')).toBeInTheDocument()
  })

  it('renders the MODISTA logo', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /MODISTA/i })).toBeInTheDocument()
  })

  it('renders About description text', () => {
    render(<Footer />)
    expect(screen.getByText(/Modista is a fashion e-commerce shop/)).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders navigation links in each column', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Brands' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'My Account' })).toBeInTheDocument()
  })

  it('renders copyright bar with Component Dock link', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year} Modista`))).toBeInTheDocument()
    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dockLink).toHaveAttribute('target', '_blank')
  })

  it('has dark footer background', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-footer-bg')
  })
})
