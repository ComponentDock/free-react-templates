import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WeeklyProgram } from './WeeklyProgram'

describe('WeeklyProgram', () => {
  it('renders the section heading with a lime underline and a retro two-column block', () => {
    const { container } = render(<WeeklyProgram />)

    const heading = screen.getByRole('heading', { level: 2, name: 'Weekly Radio Program' })
    expect(heading).toHaveClass('after:bg-brand')

    // One tall card plus two stacked cards.
    expect(screen.getAllByText('Classic Songs For Classic People')).toHaveLength(3)
    expect(screen.getAllByText('Friday 1:00pm — 2:30pm')).toHaveLength(3)
    expect(screen.getAllByRole('link')).toHaveLength(3)

    // Retro block lays out as two columns on desktop, stacked on mobile.
    expect(container.querySelector('.site-block-retro')).toHaveClass('md:flex-row')
  })
})
