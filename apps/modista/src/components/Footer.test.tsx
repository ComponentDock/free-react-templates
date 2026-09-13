import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders five column headings', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Information' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Customer Service' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Extras' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'My Account' })).toBeInTheDocument()
  })

  it('shows the MODISTA logo', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'MODISTA' })).toBeInTheDocument()
  })

  it('shows About description', () => {
    render(<Footer />)
    expect(screen.getByText(/Modista is your one-stop fashion destination/)).toBeInTheDocument()
  })

  it('shows social icons in footer', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
  })

  it('shows Information links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms & Conditions' })).toBeInTheDocument()
  })

  it('shows Customer Service links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Shipping Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Return Policy' })).toBeInTheDocument()
  })

  it('shows Extras links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Brands' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Gift Cards' })).toBeInTheDocument()
  })

  it('shows My Account links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'My Account' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Order History' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Wishlist' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Newsletter' })).toBeInTheDocument()
  })

  it('has Component Dock link in copyright', () => {
    render(<Footer />)
    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dockLink).toHaveAttribute('target', '_blank')
  })

  it('shows copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year} Modista`))).toBeInTheDocument()
  })
})
