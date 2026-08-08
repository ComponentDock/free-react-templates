import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the heading and both CTA buttons', () => {
    render(<CtaBand />)
    expect(
      screen.getByRole('heading', { name: /Ready to Start Your Learning Journey/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get Started Free/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Browse Courses/ })).toBeInTheDocument()
  })

  it('shows the trust bullets', () => {
    render(<CtaBand />)
    expect(screen.getByText(/No credit card required/)).toBeInTheDocument()
    expect(screen.getByText(/Cancel anytime/)).toBeInTheDocument()
    expect(screen.getByText(/30-day money-back guarantee/)).toBeInTheDocument()
  })
})
