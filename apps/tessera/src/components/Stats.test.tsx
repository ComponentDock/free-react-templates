import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

const stats = [
  { value: '25', label: 'Years of Experience' },
  { value: '600', label: 'Happy Clients' },
  { value: '1200', label: 'Finished Projects' },
  { value: '300', label: 'Working Days' },
]

describe('Stats', () => {
  it('shows four counters with their labels', () => {
    render(<Stats />)
    const list = screen.getByRole('list')
    for (const stat of stats) {
      expect(screen.getByText(stat.value)).toBeInTheDocument()
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    }
    expect(list).toBeInTheDocument()
  })
})
