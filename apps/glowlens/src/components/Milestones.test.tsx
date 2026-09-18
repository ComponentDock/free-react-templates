import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Milestones } from './Milestones'
import { milestones } from '../data'

describe('Milestones', () => {
  it('renders all milestone stats with values and labels', () => {
    render(<Milestones />)
    for (const stat of milestones) {
      expect(screen.getByText(stat.value)).toBeInTheDocument()
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    }
  })

  it('renders the correct number of milestone items', () => {
    render(<Milestones />)
    const stats = screen.getAllByText(/Projects|Awards|Photos|Tutorials/)
    expect(stats).toHaveLength(milestones.length)
  })
})
