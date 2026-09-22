import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders the section heading', () => {
    render(<Schedule />)
    expect(screen.getByRole('heading', { name: 'Our Schedule' })).toBeInTheDocument()
  })

  it('shows all four schedule items with times and join buttons', () => {
    render(<Schedule />)
    const names = ['Body Building', 'Yoga Pilates', 'Cardio Blast', 'Power Lift']
    for (const name of names) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    const joinButtons = screen.getAllByText('Join from $15')
    expect(joinButtons).toHaveLength(4)
  })

  it('displays time and date for each item', () => {
    render(<Schedule />)
    expect(screen.getByText('5:30 PM')).toBeInTheDocument()
    expect(screen.getByText('April 22, 2024')).toBeInTheDocument()
  })
})
