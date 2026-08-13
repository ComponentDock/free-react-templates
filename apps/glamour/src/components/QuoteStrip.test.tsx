import { render, screen } from '@testing-library/react'
import { QuoteStrip } from './QuoteStrip'
import { describe, expect, it } from 'vitest'

describe('QuoteStrip', () => {
  it('renders the heading, body, and pink CTA link', () => {
    render(<QuoteStrip />)
    expect(screen.getByRole('heading', { level: 2, name: /Wanna be a Model/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Call us now to know how!' })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('region', { name: 'Become a model' })).toBeInTheDocument()
  })
})
