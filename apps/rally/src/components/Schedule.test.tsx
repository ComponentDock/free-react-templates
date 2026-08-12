import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders the section title and the three day tabs with Day 01 active', () => {
    render(<Schedule />)

    expect(screen.getByRole('heading', { level: 2, name: 'Event Schedule' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Day 01' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Day 02' })).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByRole('tab', { name: 'Day 03' })).toHaveAttribute('aria-selected', 'false')

    const dayOnePanel = screen.getByRole('tabpanel', { name: 'Day 01' })
    expect(within(dayOnePanel).getByText('Opening Ceremony')).toBeInTheDocument()
    expect(within(dayOnePanel).getByText('Speech by: Maya Robbins')).toBeInTheDocument()
  })

  it('switches panels when another day is selected', () => {
    const { container } = render(<Schedule />)

    fireEvent.click(screen.getByRole('tab', { name: 'Day 02' }))

    expect(screen.getByRole('tab', { name: 'Day 02' })).toHaveAttribute('aria-selected', 'true')
    const dayTwoPanel = screen.getByRole('tabpanel', { name: 'Day 02' })
    expect(within(dayTwoPanel).getByText('Morning Briefing')).toBeInTheDocument()
    // The Day 01 panel is marked hidden in the DOM.
    expect(container.querySelector('#day-panel-0')).toHaveClass('hidden')

    fireEvent.click(screen.getByRole('tab', { name: 'Day 03' }))
    const dayThreePanel = screen.getByRole('tabpanel', { name: 'Day 03' })
    expect(within(dayThreePanel).getByText('Fireside Chat with Investors')).toBeInTheDocument()
    expect(container.querySelector('#day-panel-1')).toHaveClass('hidden')
  })

  it('lists every talk for the active day with time and speaker', () => {
    render(<Schedule />)

    const dayOnePanel = screen.getByRole('tabpanel', { name: 'Day 01' })
    expect(within(dayOnePanel).getByText('09.00 am')).toBeInTheDocument()
    expect(within(dayOnePanel).getAllByText(/Speech by:/)).toHaveLength(4)
  })
})
