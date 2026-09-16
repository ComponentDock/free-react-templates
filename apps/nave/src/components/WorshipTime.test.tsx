import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { WorshipTime } from './WorshipTime'

describe('WorshipTime', () => {
  it('renders section heading', () => {
    render(<WorshipTime />)
    expect(screen.getByText('Worship Time')).toBeInTheDocument()
  })

  it('renders all worship schedule items', () => {
    render(<WorshipTime />)
    expect(screen.getByText('Morning Worship')).toBeInTheDocument()
    expect(screen.getByText('Afternoon Worship')).toBeInTheDocument()
    expect(screen.getByText('Evening Worship')).toBeInTheDocument()
  })

  it('displays time for each schedule item', () => {
    render(<WorshipTime />)
    expect(screen.getByText('5:30AM - 6:00AM')).toBeInTheDocument()
    expect(screen.getByText('1:30PM - 2:00PM')).toBeInTheDocument()
    expect(screen.getByText('7:30PM - 8:00PM')).toBeInTheDocument()
  })
})
