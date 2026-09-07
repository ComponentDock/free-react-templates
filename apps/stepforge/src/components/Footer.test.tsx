import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toBe('https://www.componentdock.com/')
  })

  it('opens link in new tab', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link.getAttribute('target')).toBe('_blank')
    expect(link.getAttribute('rel')).toBe('noreferrer')
  })

  it('renders "More templates at" text', () => {
    render(<Footer />)
    expect(screen.getByText(/more templates at/i)).toBeInTheDocument()
  })
})
