import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders heading', () => {
    render(<Schedule />)
    expect(screen.getByText('Schedule')).toBeInTheDocument()
  })

  it('renders table headers', () => {
    render(<Schedule />)
    expect(screen.getByText('Sl')).toBeInTheDocument()
    expect(screen.getByText('Session')).toBeInTheDocument()
    expect(screen.getByText('Speaker')).toBeInTheDocument()
    expect(screen.getByText('Venue')).toBeInTheDocument()
    expect(screen.getByText('Time')).toBeInTheDocument()
  })

  it('renders all 6 session rows', () => {
    render(<Schedule />)
    expect(screen.getByText('Opening Ceremony')).toBeInTheDocument()
    expect(screen.getByText('Keynote Speech')).toBeInTheDocument()
    expect(screen.getByText('Coffee Break')).toBeInTheDocument()
    expect(screen.getByText('Tech Workshop')).toBeInTheDocument()
    expect(screen.getByText('Panel Discussion')).toBeInTheDocument()
    expect(screen.getByText('Closing Ceremony')).toBeInTheDocument()
  })

  it('renders speaker names in rows', () => {
    render(<Schedule />)
    expect(screen.getAllByText('Will Peters').length).toBe(2)
    expect(screen.getByText('Abigail McMillan')).toBeInTheDocument()
    expect(screen.getByText('Jean Keenan')).toBeInTheDocument()
    expect(screen.getByText('Justin Clark')).toBeInTheDocument()
  })
})
