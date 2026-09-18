import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CounterSection } from './CounterSection'

describe('CounterSection', () => {
  it('renders all four stat counters', () => {
    render(<CounterSection />)
    expect(screen.getByText('1,250')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('120')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<CounterSection />)
    expect(screen.getByText('Happy Students')).toBeInTheDocument()
    expect(screen.getByText('Expert Teachers')).toBeInTheDocument()
    expect(screen.getByText('Courses Offered')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
  })
})
