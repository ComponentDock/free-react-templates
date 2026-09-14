import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { StatsBar } from './StatsBar'

describe('StatsBar', () => {
  it('renders the four key metrics', () => {
    render(<StatsBar />)
    for (const value of ['10K+', '$50M+', '98%', '50']) {
      expect(screen.getByText(value)).toBeInTheDocument()
    }
    for (const label of [
      'Installations',
      'Saved for Customers',
      'Customer Satisfaction',
      'States Served',
    ]) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
