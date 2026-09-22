import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsBar } from './StatsBar'

describe('StatsBar', () => {
  it('renders all four stats with values and labels', () => {
    render(<StatsBar />)
    for (const stat of [
      { value: '5+', label: 'Years of Excellence' },
      { value: '10000+', label: 'Happy Guests' },
      { value: '150+', label: 'Luxury Rooms' },
      { value: '25+', label: 'Industry Awards' },
    ]) {
      expect(screen.getByText(stat.value)).toBeInTheDocument()
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    }
  })

  it('renders exactly 4 stat items', () => {
    const { container } = render(<StatsBar />)
    const statDivs = container.querySelectorAll('.text-center')
    expect(statDivs).toHaveLength(4)
  })
})
