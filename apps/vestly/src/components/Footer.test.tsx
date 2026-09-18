import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the logo with brand colors', () => {
    render(<Footer />)
    expect(screen.getByText('in')).toHaveClass('text-brand')
    expect(screen.getByText('vest')).toHaveClass('text-white')
  })

  it('renders the Useful Links column', () => {
    render(<Footer />)
    expect(screen.getByText('Useful Links')).toBeInTheDocument()
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(homeLinks.length).toBeGreaterThanOrEqual(1)
    const cryptoLink = screen.getAllByRole('link', { name: 'Crypto' })
    expect(cryptoLink.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the newsletter form', () => {
    render(<Footer />)
    expect(screen.getByText('Subscribe to our newsletter')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your E-mail')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Google Plus')).toBeInTheDocument()
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
    expect(screen.getByLabelText('Reddit')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  })

  it('renders copyright bar with year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
  })

  it('renders copyright navigation links', () => {
    render(<Footer />)
    const copyrightLinks = ['About us', 'Services', 'Blog', 'Contact']
    copyrightLinks.forEach((link) => {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThanOrEqual(1)
    })
  })
})
