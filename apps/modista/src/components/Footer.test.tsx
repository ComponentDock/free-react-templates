import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders five column headings', () => {
    render(<Footer />)
    expect(screen.getAllByText('Information').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Customer Service').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Extras').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('My Account').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the MODISTA logo', () => {
    render(<Footer />)
    expect(screen.getAllByRole('link', { name: /MODISTA/i }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders About description text', () => {
    render(<Footer />)
    expect(screen.getByText(/Modista is a fashion e-commerce shop/)).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<Footer />)
    expect(screen.getAllByRole('link', { name: 'Facebook' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Twitter' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Pinterest' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Instagram' }).length).toBeGreaterThanOrEqual(1)
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
