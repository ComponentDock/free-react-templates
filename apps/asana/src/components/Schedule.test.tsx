import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders the section heading', () => {
    render(<Schedule />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Schedule')
  })

  it('renders all four schedule items', () => {
    render(<Schedule />)
    expect(screen.getByText('Yinyasa')).toBeInTheDocument()
    expect(screen.getByText('Chandra Vinyasa')).toBeInTheDocument()
    expect(screen.getByText('Surya Vinyasa')).toBeInTheDocument()
    expect(screen.getByText('Ashtanga Foundations')).toBeInTheDocument()
  })

  it('displays times for each item', () => {
    render(<Schedule />)
    const times = screen.getAllByText('5:30 PM')
    expect(times.length).toBe(4)
  })

  it('displays Join buttons', () => {
    render(<Schedule />)
    const joinButtons = screen.getAllByText('Join from $15')
    expect(joinButtons.length).toBe(4)
  })

  it('displays dates for each item', () => {
    render(<Schedule />)
    expect(screen.getByText('Every Monday')).toBeInTheDocument()
    expect(screen.getByText('Every Tuesday')).toBeInTheDocument()
    expect(screen.getByText('Every Wednesday')).toBeInTheDocument()
    expect(screen.getByText('Every Thursday')).toBeInTheDocument()
  })
})
