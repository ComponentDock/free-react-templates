import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Overview } from './Overview'

describe('Overview', () => {
  it('renders the four stat counters with labels', () => {
    render(<Overview />)
    expect(screen.getByRole('region', { name: /company stats/i })).toBeInTheDocument()
    for (const [value, label] of [
      ['286+', 'Projects done'],
      ['942+', 'Happy Clients'],
      ['263+', 'Real professionals'],
      ['2000+', 'Cups of Coffee'],
    ] as const) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
