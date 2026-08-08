import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CounterBand } from './CounterBand'

describe('CounterBand', () => {
  it('shows the four stats and the explore CTA', () => {
    render(<CounterBand />)
    for (const label of [
      'Finished Projects',
      'Happy Customers',
      'Working Hours',
      'Cups of Coffee',
    ]) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    expect(screen.getByText('250')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore Further' })).toHaveAttribute(
      'href',
      '#portfolio',
    )
  })
})
