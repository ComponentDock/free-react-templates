import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer column headings', () => {
    render(<Footer />)
    expect(screen.getByText('Top Products')).toBeInTheDocument()
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders the Component Dock link in the copyright', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the newsletter email input', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Your Email Address')).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Dribbble' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('renders footer link items', () => {
    render(<Footer />)
    expect(screen.getByText('Managed Website')).toBeInTheDocument()
    // "Jobs" appears in multiple columns, use getAllByText
    expect(screen.getAllByText('Jobs').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Guides')).toBeInTheDocument()
  })
})
