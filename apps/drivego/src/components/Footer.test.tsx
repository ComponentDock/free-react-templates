import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name, about text, and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    const driveTexts = screen.getAllByText(/Drive/i)
    expect(driveTexts.length).toBeGreaterThanOrEqual(1)

    expect(screen.getByText(/Far far away, behind the word mountains/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('renders all four link columns', () => {
    render(<Footer />)
    expect(screen.getAllByRole('heading', { name: /Quick Links/i })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { name: /Resources/i })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { name: /Support/i })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { name: /Company/i })).toHaveLength(1)
  })

  it('renders the Component Dock link in the copyright', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
