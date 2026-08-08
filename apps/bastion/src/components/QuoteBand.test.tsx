import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { QuoteBand } from './QuoteBand'

describe('QuoteBand', () => {
  it('shows the get-started heading and the quote CTA', () => {
    render(<QuoteBand />)
    expect(screen.getByRole('heading', { name: 'Get started' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Request a quote' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
