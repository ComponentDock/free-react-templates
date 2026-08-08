import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders the heading and all five days', () => {
    render(<Schedule />)

    expect(screen.getByRole('heading', { name: "This Week's Classes" })).toBeInTheDocument()

    for (const day of ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']) {
      expect(screen.getByRole('heading', { name: day })).toBeInTheDocument()
    }
  })

  it('lists Monday classes with time, name, coach and level', () => {
    render(<Schedule />)

    const monday = screen.getByRole('heading', { name: 'Monday' }).closest('div')!

    expect(monday).toHaveTextContent('6:00 AM')
    expect(monday).toHaveTextContent('Morning HIIT')
    expect(monday).toHaveTextContent('Coach Marcus')
    expect(monday).toHaveTextContent('Intermediate')
  })

  it('shows level pills for all three levels', () => {
    render(<Schedule />)

    expect(screen.getAllByText('Beginner').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Intermediate').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Advanced').length).toBeGreaterThan(0)
  })
})
