import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the eyebrow, headline and sub-paragraph', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Limited tickets remaining')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "Don't Miss Out" })).toBeInTheDocument()
    expect(screen.getByText(/Join us for three days/i)).toBeInTheDocument()
  })

  it('shows the date and venue lines', () => {
    render(<CtaBanner />)
    expect(screen.getByText('March 15-17, 2032')).toBeInTheDocument()
    expect(screen.getByText('Moscone Center, San Francisco, CA')).toBeInTheDocument()
  })

  it('renders the gradient CTA and trust row', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('link', { name: /get tickets now/i })).toBeInTheDocument()
    for (const item of ['Secure checkout', '30-day refund policy', 'Instant confirmation']) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
  })
})
