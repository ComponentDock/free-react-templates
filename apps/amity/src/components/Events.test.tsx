import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Events } from './Events'

describe('Events', () => {
  it('renders the Upcoming Events heading with three event rows', () => {
    render(<Events />)
    expect(screen.getByRole('heading', { name: 'Upcoming Events' })).toBeInTheDocument()
    const events = screen.getAllByLabelText(/Event: /)
    expect(events).toHaveLength(3)

    const first = within(events[0]!)
    expect(first.getByText('Aug 25, 2018')).toBeInTheDocument()
    expect(first.getByText('Ball Room New York')).toBeInTheDocument()
    expect(
      first.getByRole('heading', { level: 3, name: 'Fundraiser for Kids' }),
    ).toBeInTheDocument()
    expect(first.getByRole('link', { name: 'Read More' })).toHaveAttribute('href', '#donate')
  })

  it('renders the Featured Cause card with progress and amounts', () => {
    render(<Events />)
    const card = screen.getByLabelText('Featured cause')
    expect(within(card).getByRole('heading', { name: 'Fundraiser for Kids' })).toBeInTheDocument()
    expect(within(card).getByRole('progressbar')).toHaveAttribute('aria-valuenow', '83')
    expect(within(card).getByText('Raised: $56 880')).toBeInTheDocument()
    expect(within(card).getByText('Goal: $70 000')).toBeInTheDocument()
    expect(within(card).getByRole('link', { name: 'Donate Now' })).toHaveAttribute(
      'href',
      '#donate',
    )
  })
})
