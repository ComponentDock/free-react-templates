import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders the section heading', () => {
    render(<Events />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Upcoming Events')
  })

  it('renders at least two events with dates and titles', () => {
    render(<Events />)

    expect(screen.getByText('Sunday Worship Service')).toBeInTheDocument()
    expect(screen.getByText('Community Outreach Day')).toBeInTheDocument()
    expect(screen.getByText('Easter Celebration')).toBeInTheDocument()
    expect(screen.getByText('Mar 15, 2025')).toBeInTheDocument()
  })

  it('renders locations for events', () => {
    const { container } = render(<Events />)

    const locations = container.querySelectorAll('span')
    const locationTexts = Array.from(locations).map((el) => el.textContent)
    expect(locationTexts).toContain('Main Sanctuary')
    expect(locationTexts).toContain('City Park')
  })
})
