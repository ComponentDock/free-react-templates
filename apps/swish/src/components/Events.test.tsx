import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders the section title and two event cards', () => {
    render(<Events />)

    expect(screen.getByText('Upcoming Event')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Land Morning Blessed' })).toBeInTheDocument()

    expect(screen.getAllByText('15').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('jun').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('12:00 AM - 12:30 AM').length).toBe(2)
    expect(screen.getAllByText('Sandis peter').length).toBe(2)
    expect(screen.getAllByRole('link', { name: 'View Details' }).length).toBe(2)
  })
})
