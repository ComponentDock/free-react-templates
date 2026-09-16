import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders heading text', () => {
    render(<CTA />)
    expect(screen.getByText(/Contact Us For Projects or Need a Quotation/i)).toBeInTheDocument()
  })

  it('renders Get Started button', () => {
    render(<CTA />)
    const btn = screen.getByText('Get Started')
    expect(btn).toBeInTheDocument()
    expect(btn.getAttribute('href')).toBe('#contact')
  })

  it('renders with custom className', () => {
    render(<CTA className="extra" />)
    expect(screen.getByTestId('cta').className).toContain('extra')
  })
})
