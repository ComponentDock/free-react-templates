import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the site name, navigation links and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /GRAINCRAFT/i })).toBeInTheDocument()
    for (const link of ['Home', 'About', 'Services', 'Portfolio', 'FAQ']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const social of ['Facebook', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('shows contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/1234 Woodcraft Lane/i)).toBeInTheDocument()
    expect(screen.getByText('+1 (503) 555-0187')).toBeInTheDocument()
    expect(screen.getByText('info@graincraft.com')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
