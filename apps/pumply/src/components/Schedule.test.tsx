import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('shows the heading, six day tabs with Monday active, and the class table', () => {
    const { container } = render(<Schedule />)
    expect(screen.getByRole('heading', { level: 2, name: 'Schedule' })).toHaveClass('text-primary')
    const tabs = screen.getAllByRole('tab')
    expect(tabs.map((tab) => tab.textContent)).toEqual([
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Sunday',
    ])
    expect(screen.getByRole('tab', { name: 'Monday' })).toHaveAttribute('aria-selected', 'true')
    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(5)
    expect(screen.getByText('Gym')).toBeInTheDocument()
    expect(screen.getByText('8:00am - 10:00am')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Aerobics')).toBeInTheDocument()
    const joinLinks = screen.getAllByRole('link', { name: 'Join Now' })
    expect(joinLinks).toHaveLength(5)
    for (const link of joinLinks) {
      expect(link).toHaveAttribute('href', '#contact-section')
    }
    expect(container.querySelector('thead')).toBeNull()
  })

  it('switches the active day tab', async () => {
    const user = userEvent.setup()
    render(<Schedule />)
    await user.click(screen.getByRole('tab', { name: 'Sunday' }))
    expect(screen.getByRole('tab', { name: 'Sunday' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Monday' })).toHaveAttribute('aria-selected', 'false')
    const panel = screen.getByRole('tabpanel')
    expect(within(panel).getByText('Gym')).toBeInTheDocument()
  })
})
