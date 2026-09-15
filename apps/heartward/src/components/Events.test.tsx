import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders the section heading', () => {
    render(<Events />)
    expect(screen.getByText('Upcoming Event')).toBeInTheDocument()
  })

  it('renders all three event cards', () => {
    render(<Events />)
    expect(screen.getByText('Working with Syrian Children')).toBeInTheDocument()
    expect(screen.getByText('Help the Homeless Initiative')).toBeInTheDocument()
    expect(screen.getByText('Volunteer Idea Conference 2024')).toBeInTheDocument()
  })

  it('renders countdown values', () => {
    render(<Events />)
    const daysValues = screen.getAllByText('552')
    expect(daysValues.length).toBe(3)
    const hoursValues = screen.getAllByText('8')
    expect(hoursValues.length).toBe(3)
    const minutesValues = screen.getAllByText('45')
    expect(minutesValues.length).toBe(3)
  })

  it('renders event dates', () => {
    render(<Events />)
    expect(screen.getByText('15 Jan')).toBeInTheDocument()
    expect(screen.getByText('22 Feb')).toBeInTheDocument()
    expect(screen.getByText('08 Mar')).toBeInTheDocument()
  })
})
