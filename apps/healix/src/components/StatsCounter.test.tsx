import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { StatsCounter } from './StatsCounter'

describe('StatsCounter', () => {
  it('renders years of experience', () => {
    render(<StatsCounter />)
    expect(screen.getByText('18+')).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
  })

  it('renders happy patients', () => {
    render(<StatsCounter />)
    expect(screen.getByText('450+')).toBeInTheDocument()
    expect(screen.getByText('Happy Patients')).toBeInTheDocument()
  })

  it('renders qualified doctors', () => {
    render(<StatsCounter />)
    expect(screen.getByText('15+')).toBeInTheDocument()
    expect(screen.getByText('Qualified Doctors')).toBeInTheDocument()
  })

  it('renders awards won', () => {
    render(<StatsCounter />)
    expect(screen.getByText('45+')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
  })
})
