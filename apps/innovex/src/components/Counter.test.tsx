import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders 4 statistics with numbers and labels', () => {
    render(<Counter />)
    const stats = [
      { number: '4800', label: 'Project Completed' },
      { number: '1000', label: 'Our Staff' },
      { number: '350', label: 'Services Provide' },
      { number: '7650', label: 'Happy Customers' },
    ]
    stats.forEach(({ number, label }) => {
      expect(screen.getByText(number)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    })
  })
})
