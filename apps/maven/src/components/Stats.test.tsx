import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the four counter items with values and labels', () => {
    render(<Stats />)

    expect(screen.getByText('85')).toBeInTheDocument()
    expect(screen.getAllByText('95')).toHaveLength(2)
    expect(screen.getByText('75')).toBeInTheDocument()

    const labels = screen.getAllByRole('heading', { level: 4 })
    expect(labels.map((h) => h.textContent)).toEqual([
      'Satisfied Client',
      'Total Project',
      'Work Completed',
      'Work Completed',
    ])
  })
})
