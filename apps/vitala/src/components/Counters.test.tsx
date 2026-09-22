import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  it('renders all four stat values', () => {
    render(<Counters />)
    expect(screen.getByText('30K')).toBeInTheDocument()
    expect(screen.getByText('2K+')).toBeInTheDocument()
    expect(screen.getByText('5K+')).toBeInTheDocument()
    expect(screen.getByText('20K+')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Counters />)
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    expect(screen.getByText('Blood Donors')).toBeInTheDocument()
    expect(screen.getByText('Patients Cured')).toBeInTheDocument()
    expect(screen.getByText('Staff Members')).toBeInTheDocument()
  })
})
