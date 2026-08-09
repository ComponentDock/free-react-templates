import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaSection } from './CtaSection'

describe('CtaSection', () => {
  it('renders the headline, both buttons, and the reassurance line', () => {
    render(<CtaSection />)

    expect(
      screen.getByRole('heading', { name: 'Ready to Take Control of Your Finances?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start Free Trial' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Talk to Sales' })).toBeInTheDocument()
    expect(
      screen.getByText(/30-day free trial • No credit card required • Cancel anytime/),
    ).toBeInTheDocument()
  })
})
