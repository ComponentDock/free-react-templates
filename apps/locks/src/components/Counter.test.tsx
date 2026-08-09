import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders four statistics with their values', () => {
    render(<Counter />)
    for (const label of ['Creative Makeup', 'Number of Awards', 'Happy Clients', 'Piercing Done']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    for (const value of ['705', '1000', '3000', '900']) {
      expect(screen.getByText(value)).toBeInTheDocument()
    }
  })
})
