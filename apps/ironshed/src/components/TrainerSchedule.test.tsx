import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TrainerSchedule } from './TrainerSchedule'

describe('TrainerSchedule', () => {
  it('renders the section title', () => {
    render(<TrainerSchedule />)
    expect(screen.getByRole('heading', { name: 'Our Trainer' })).toBeInTheDocument()
  })

  it('renders a schedule table with day headers', () => {
    render(<TrainerSchedule />)
    for (const day of ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']) {
      expect(screen.getByText(day)).toBeInTheDocument()
    }
  })

  it('renders time slot rows', () => {
    render(<TrainerSchedule />)
    const timeSlots = screen.getAllByText('10:00 - 12:00')
    expect(timeSlots.length).toBeGreaterThanOrEqual(1)
    const afternoonSlots = screen.getAllByText('14:00 - 16:00')
    expect(afternoonSlots.length).toBeGreaterThanOrEqual(1)
    const eveningSlots = screen.getAllByText('16:00 - 18:00')
    expect(eveningSlots.length).toBeGreaterThanOrEqual(1)
  })

  it('renders workout types in cells', () => {
    render(<TrainerSchedule />)
    const gymCells = screen.getAllByText('Gym')
    expect(gymCells.length).toBeGreaterThanOrEqual(1)

    const yogaCells = screen.getAllByText('Yoga')
    expect(yogaCells.length).toBeGreaterThanOrEqual(1)
  })

  it('renders trainer names in cells', () => {
    render(<TrainerSchedule />)
    const foxInstances = screen.getAllByText('Robert Fox')
    expect(foxInstances.length).toBeGreaterThanOrEqual(1)

    const cooperInstances = screen.getAllByText('Jane Cooper')
    expect(cooperInstances.length).toBeGreaterThanOrEqual(1)
  })

  it('has a parallax background', () => {
    const { container } = render(<TrainerSchedule />)
    const section = container.querySelector('section')!
    expect(section.style.backgroundImage).toContain('picsum.photos')
  })
})
