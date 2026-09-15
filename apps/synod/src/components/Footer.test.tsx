import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo, about text and quick links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /Synod/ })).toHaveAttribute('href', '#home')
    expect(screen.getByText(/community of believers/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders contact info', () => {
    render(<Footer />)

    expect(screen.getByText('123 Faith Street, Graceville')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('info@synodchurch.org')).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year} Synod Church`))).toBeInTheDocument()
  })
})
