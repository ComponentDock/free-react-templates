import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Counter } from './Counter'
import { counters } from '../data'

describe('Counter', () => {
  it('renders the section heading', () => {
    render(<Counter />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Church Achievements')
  })

  it('renders all counter values and labels', () => {
    render(<Counter />)
    counters.forEach((c) => {
      expect(screen.getByText(c.number.toLocaleString())).toBeInTheDocument()
      expect(screen.getByText(c.label)).toBeInTheDocument()
    })
  })

  it('renders 3 counter blocks', () => {
    render(<Counter />)
    const labels = counters.map((c) => screen.getByText(c.label))
    expect(labels.length).toBe(3)
  })
})
