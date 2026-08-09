import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders the four statistics with values and labels', () => {
    render(<Counter />)
    for (const [value, label] of [
      ['2560', 'Happy Customers'],
      ['60', 'Treatments'],
      ['50', 'Years of Experience'],
      ['100', 'Lesson Conducted'],
    ] as const) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
