import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer widgets with Address, Email and Phone', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Address' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Email Address' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Phone Number' })).toBeInTheDocument()
  })

  it('renders email and phone links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /info@glissade.com/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /support@glissade.com/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /012 4562 982 3612/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /012 6321 956 4587/i })).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Dribbble' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Behance' })).toBeInTheDocument()
  })

  it('renders the site name link', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link', { name: /Glissade/i })
    const siteLink = links.find((l) => l.getAttribute('href') === '#home')
    expect(siteLink).toBeDefined()
  })
})
