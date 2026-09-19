import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders about text, quick links, featured product, and contact info', () => {
    render(<Footer />)

    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText(/trusted ecommerce store/)).toBeInTheDocument()
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Featured Product')).toBeInTheDocument()
    expect(screen.getByText('Classic Watch')).toBeInTheDocument()
    expect(screen.getByText('$199')).toBeInTheDocument()
    expect(screen.getByText('123 Commerce Street')).toBeInTheDocument()
  })

  it('links to Component Dock in copyright', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social media links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })
})
