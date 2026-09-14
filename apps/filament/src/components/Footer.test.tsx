import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders navigation column headings', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Top Products' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Company' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Contact' })).toBeInTheDocument()
  })

  it('renders Quick Contact phone and email', () => {
    render(<Footer />)
    expect(screen.getByText('(012) 345 678 901')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'info@filament.com' })).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Dribbble' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Behance' })).toBeInTheDocument()
  })

  it('renders Component Dock link in footer bottom', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Managed Website' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Jobs' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pricing' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Brand Identity' })).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Footer className="custom-class" />)
    expect(screen.getByRole('contentinfo')).toHaveClass('custom-class')
  })
})
