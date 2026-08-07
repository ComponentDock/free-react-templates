import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the five metrics with their labels', () => {
    render(<Stats />)

    const expected = [
      ['10', 'Years of Experience'],
      ['+500', 'Happy Clients'],
      ['17k', 'Followers on FB'],
      ['132', 'Finished Projects'],
      ['3', 'Coffees a day'],
    ] as const

    for (const [value, label] of expected) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
