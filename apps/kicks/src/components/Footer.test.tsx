import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Kicks')).toBeInTheDocument()
  })

  it('renders customer care links', () => {
    render(<Footer />)
    for (const link of ['Contact Us', 'Shipping', 'Returns', 'Size Guide', 'FAQ']) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders information links', () => {
    render(<Footer />)
    for (const link of ['About Us', 'Careers', 'Privacy Policy', 'Terms & Conditions']) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders news links', () => {
    render(<Footer />)
    for (const link of ['Blog', 'Press', 'Affiliates', 'Gift Cards']) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/123 Shoe Street/)).toBeInTheDocument()
    expect(screen.getByText('+1 (234) 567-890')).toBeInTheDocument()
    expect(screen.getByText('info@kicks.com')).toBeInTheDocument()
  })

  it('renders social media icon links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('renders Component Dock attribution', () => {
    render(<Footer />)
    expect(screen.getByText(/Built by Component Dock/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Built by Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
