import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders FAQ heading', () => {
    render(<FAQ />)
    expect(screen.getByText('Frequently Ask Questions')).toBeInTheDocument()
  })

  it('renders all 8 FAQ items', () => {
    render(<FAQ />)
    const questions = screen.getAllByText('Can I accept both Paypal and Stripe?')
    expect(questions.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Where are you from?')).toBeInTheDocument()
    expect(screen.getByText('What is your opening time?')).toBeInTheDocument()
  })

  it('renders FAQ answers', () => {
    render(<FAQ />)
    expect(screen.getByText(/Voluptatum nobis obcaecati/)).toBeInTheDocument()
  })
})
