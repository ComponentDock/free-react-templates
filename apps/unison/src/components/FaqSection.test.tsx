import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FaqSection } from './FaqSection'

describe('FaqSection', () => {
  it('renders the title and all eight question blocks in two columns', () => {
    render(<FaqSection />)
    expect(screen.getByRole('heading', { name: 'Frequently Ask Questions' })).toBeInTheDocument()

    const questions = screen.getAllByRole('heading', { level: 3 })
    expect(questions).toHaveLength(8)
    expect(screen.getAllByText('Can I accept both Paypal and Stripe?')).toHaveLength(2)
    expect(screen.getAllByText('What available is refund period?')).toHaveLength(2)
    expect(screen.getAllByText('Where are you from?')).toHaveLength(2)
    expect(screen.getAllByText('What is your opening time?')).toHaveLength(2)
  })

  it('renders an answer paragraph under each question', () => {
    render(<FaqSection />)
    expect(
      screen.getAllByText(/Far far away, behind the word mountains/).length,
    ).toBeGreaterThanOrEqual(8)
  })
})
