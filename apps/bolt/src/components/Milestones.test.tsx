import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Milestones, milestones } from './Milestones'

describe('Milestones', () => {
  it('shows four yellow number chips with captions', () => {
    render(<Milestones />)
    for (const stat of milestones) {
      expect(screen.getByRole('heading', { name: stat.number })).toBeInTheDocument()
      expect(screen.getByText(stat.caption)).toBeInTheDocument()
    }
  })
})
