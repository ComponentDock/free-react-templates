import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, social icons, and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Brightmind/ })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute('target', '_blank')
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute('target', '_blank')
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute('target', '_blank')
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('target', '_blank')
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders recent blog and contact info', () => {
    render(<Footer />)
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
    expect(screen.getByText('123 University Ave, Education City')).toBeInTheDocument()
  })
})
