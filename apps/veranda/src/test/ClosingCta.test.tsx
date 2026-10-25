import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ClosingCta } from '../components/ClosingCta'

describe('ClosingCta', () => {
  it('renders the band heading, lede and the two controls', () => {
    render(<ClosingCta />)

    expect(screen.getByRole('heading', { name: 'The room is already talking' })).toBeInTheDocument()
    expect(screen.getByText(/membership is nine dollars a month/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Join the Community/ })).toHaveAttribute(
      'href',
      '#pricing',
    )
    expect(screen.getByRole('link', { name: 'Browse discussions first' })).toHaveAttribute(
      'href',
      '#discussions',
    )
  })
})
