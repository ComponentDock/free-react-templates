import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders four statistics with values and labels', () => {
    render(<Counter />)

    for (const [value, label] of [
      ['320', 'Years of Experienced'],
      ['850', 'Menus/Dish'],
      ['25', 'Staffs'],
      ['4500', 'Happy Customers'],
    ] as const) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
