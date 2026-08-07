import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Counters } from './Counters'

describe('Counters', () => {
  it('renders the four counter stats', () => {
    render(<Counters />)

    const stats = [
      { value: '120', label: 'Projects' },
      { value: '80', label: 'Employees' },
      { value: '35', label: 'Constructor' },
      { value: '200', label: 'Partners' },
    ]
    for (const stat of stats) {
      expect(screen.getByText(stat.value)).toBeInTheDocument()
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    }
  })
})
