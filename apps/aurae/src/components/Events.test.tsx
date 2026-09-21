import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders the section heading', () => {
    render(<Events />)
    expect(screen.getByRole('heading', { name: /Upcoming Events/i })).toBeInTheDocument()
  })

  it('renders all three event cards', () => {
    render(<Events />)
    expect(screen.getByRole('heading', { name: /Lole White Yoga Tour/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Free Yoga Madrid/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /One Love Dallas/i })).toBeInTheDocument()
  })

  it('renders event dates and participant counts', () => {
    render(<Events />)
    expect(screen.getByText('Dec 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('120 attendees')).toBeInTheDocument()
  })
})
