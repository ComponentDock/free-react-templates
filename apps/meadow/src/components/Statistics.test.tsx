import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Statistics } from './Statistics'
import { stats, statsEyebrow, statsTitle } from '../data'

describe('Statistics', () => {
  it('shows the green band with white eyebrow and Technical Statistics heading', () => {
    const { container } = render(<Statistics />)
    const section = screen.getByTestId('statistics-section')
    expect(section).toHaveClass('bg-brand')
    expect(screen.getByText(statsEyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: statsTitle })).toBeInTheDocument()
    expect(container.querySelectorAll('.stat-icon svg').length).toBe(stats.length)
  })

  it('renders four counters with numbers and captions', () => {
    render(<Statistics />)
    for (const stat of stats) {
      expect(screen.getByText(stat.number)).toBeInTheDocument()
      expect(screen.getByText(stat.caption)).toBeInTheDocument()
    }
  })
})
