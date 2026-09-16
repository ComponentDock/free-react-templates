import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the brand name and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Gracious/i })).toHaveAttribute('href', '#home')
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('shows quick links', () => {
    render(<Footer />)
    for (const link of ['Home', 'About', 'Causes', 'Blog', 'Gallery', 'Events', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('shows contact info', () => {
    render(<Footer />)
    expect(screen.getByText('+10 367 267 2678')).toBeInTheDocument()
    expect(screen.getByText('info@gracious.org')).toBeInTheDocument()
  })

  it('links to Component Dock in the copyright', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
