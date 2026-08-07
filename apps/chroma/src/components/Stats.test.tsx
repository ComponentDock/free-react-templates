import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the four metrics', () => {
    render(<Stats />)

    const expected = [
      ['129', 'Awards Received'],
      ['1507', 'Cups of Coffee'],
      ['108', 'Projects Completed'],
      ['103', 'Happy Clients'],
    ] as const

    for (const [value, label] of expected) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
