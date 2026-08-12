import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders four statistics with values and labels', () => {
    render(<Counter />)

    for (const [value, label] of [
      ['320', 'Happy Customer'],
      ['120', 'Projects'],
      ['25', 'Years of Experience'],
      ['45', 'Awards'],
    ] as const) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
