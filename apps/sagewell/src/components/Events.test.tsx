import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Events } from './Events'

describe('Events', () => {
  it('renders the section title', () => {
    render(<Events />)
    expect(screen.getByText('Recent Events')).toBeInTheDocument()
  })

  it('renders three events', () => {
    render(<Events />)
    expect(screen.getByText(/How to Speak Like a Native Speaker/)).toBeInTheDocument()
    expect(screen.getByText(/International Education Summit/)).toBeInTheDocument()
    expect(screen.getByText(/Career Guidance Workshop/)).toBeInTheDocument()
  })

  it('displays date badges', () => {
    render(<Events />)
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('displays event metadata (time, date, location)', () => {
    render(<Events />)
    expect(screen.getByText('10:30 PM')).toBeInTheDocument()
    expect(screen.getByText('AH Auditorium')).toBeInTheDocument()
  })
})
