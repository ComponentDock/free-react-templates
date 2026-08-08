import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders the heading, eyebrow and day tabs', () => {
    render(<Schedule />)
    expect(screen.getByText('3-Day Event')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Event Schedule' })).toBeInTheDocument()

    for (const tab of ['March 15', 'March 16', 'March 17']) {
      expect(screen.getByRole('tab', { name: new RegExp(tab) })).toBeInTheDocument()
    }
  })

  it('shows Day 1 events by default', () => {
    render(<Schedule />)
    expect(screen.getByText('Opening Keynote: The Future of AI')).toBeInTheDocument()
    expect(screen.getByText('Dr. Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('Registration & Breakfast')).toBeInTheDocument()
  })

  it('switches the timeline when another day tab is activated', async () => {
    const user = userEvent.setup()
    render(<Schedule />)

    await user.click(screen.getByRole('tab', { name: /march 16/i }))
    expect(screen.getByText('Building Sustainable Tech Companies')).toBeInTheDocument()
    expect(screen.queryByText('Opening Keynote: The Future of AI')).not.toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: /march 17/i }))
    expect(screen.getByText("Closing Keynote: What's Next")).toBeInTheDocument()
    expect(screen.queryByText('Building Sustainable Tech Companies')).not.toBeInTheDocument()
  })

  it('marks the active tab and renders type badges, legend and download link', async () => {
    const user = userEvent.setup()
    render(<Schedule />)

    const dayOne = screen.getByRole('tab', { name: /march 15/i })
    expect(dayOne).toHaveAttribute('aria-selected', 'true')

    for (const badge of ['Keynote', 'Break', 'Talk', 'Workshop']) {
      expect(screen.getAllByText(badge).length).toBeGreaterThan(0)
    }

    // Legend chips
    expect(screen.getByText('Legend')).toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: /march 16/i }))
    expect(screen.getByRole('tab', { name: /march 16/i })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('link', { name: /download full schedule/i })).toBeInTheDocument()
  })

  it('shows an Add to Calendar action on talk rows', () => {
    render(<Schedule />)
    expect(screen.getAllByRole('link', { name: /add to calendar/i }).length).toBeGreaterThan(0)
  })
})
