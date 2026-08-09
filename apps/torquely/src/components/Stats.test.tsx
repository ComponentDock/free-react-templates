import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the four counters with their values and labels', () => {
    render(<Stats />)
    for (const [value, label] of [
      ['45', 'Years of Experienced'],
      ['8500', 'Project completed'],
      ['2342', 'Happy Customers'],
      ['30', 'Award Winning'],
    ] as const) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
