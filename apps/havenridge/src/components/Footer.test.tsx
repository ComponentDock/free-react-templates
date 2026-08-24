import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Havenridge logo', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Havenridge' })).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Footer />)
    expect(screen.getByText(/trusted partner in finding/i)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders the Offers column', () => {
    render(<Footer />)
    expect(screen.getByText('Offers')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Listed Properties' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Market Analysis' })).toBeInTheDocument()
  })

  it('renders the Company column', () => {
    render(<Footer />)
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Our Services' })).toBeInTheDocument()
  })

  it('renders the Contact column', () => {
    render(<Footer />)
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('+1 (800) 555-1234')).toBeInTheDocument()
    expect(screen.getByText('info@havenridge.com')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the copyright notice', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`${year} Havenridge\\. All rights reserved`)),
    ).toBeInTheDocument()
  })
})
