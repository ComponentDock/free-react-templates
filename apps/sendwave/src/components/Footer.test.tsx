import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link text', () => {
    render(<Footer />)
    expect(screen.getByText(/more templates at/i)).toBeInTheDocument()
  })

  it('renders the Component Dock link with correct href', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('has amber brand color on link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveClass('text-brand-amber')
  })
})
