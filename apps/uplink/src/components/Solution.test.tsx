import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Solution } from './Solution'

describe('Solution', () => {
  it('shows the headline, supporting copy, and consultation CTA', () => {
    render(<Solution />)
    expect(
      screen.getByRole('heading', { name: 'Looking for a Custom Solution?' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/tailor-made hosting/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /request free consultation/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
