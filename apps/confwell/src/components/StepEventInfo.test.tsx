import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { StepEventInfo } from './StepEventInfo'

describe('StepEventInfo', () => {
  it('renders the heading', () => {
    render(<StepEventInfo />)
    expect(screen.getByRole('heading', { name: /event information/i })).toBeInTheDocument()
  })

  it('displays all event details', () => {
    render(<StepEventInfo />)
    expect(screen.getByText(/august 1 @ 8:00 am/i)).toBeInTheDocument()
    expect(screen.getByText(/8:00 am - 5:00 pm/i)).toBeInTheDocument()
    expect(screen.getByText(/national conference/i)).toBeInTheDocument()
    expect(screen.getByText(/no 40 baria street 133\/2/i)).toBeInTheDocument()
    expect(screen.getByText(/confwell@example.com/i)).toBeInTheDocument()
  })

  it('displays labels for each detail', () => {
    render(<StepEventInfo />)
    expect(screen.getByText('Date:')).toBeInTheDocument()
    expect(screen.getByText('Time:')).toBeInTheDocument()
    expect(screen.getByText('Venue:')).toBeInTheDocument()
    expect(screen.getByText('Address:')).toBeInTheDocument()
    expect(screen.getByText('Website:')).toBeInTheDocument()
  })
})
