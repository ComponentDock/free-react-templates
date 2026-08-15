import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Events } from './Events'

describe('Events', () => {
  it('renders the heading above three event cards with meta', () => {
    render(<Events />)
    expect(screen.getByText('Events')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Upcoming Events' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'How To Recover The Cutting Edge' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Monday, 8:00 Am - Tuesday, 8:00 Pm')).toBeInTheDocument()
    expect(screen.getByText('Spring Church')).toBeInTheDocument()
    expect(screen.getAllByText(/203 Fake St\./).length).toBe(3)
    expect(screen.getAllByRole('link', { name: 'Read more' }).length).toBe(3)
  })
})
