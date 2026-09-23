import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Achievements } from './Achievements'

describe('Achievements', () => {
  it('renders all four stat values', () => {
    render(<Achievements />)
    expect(screen.getByText('99.55%')).toBeInTheDocument()
    expect(screen.getByText('98,000+')).toBeInTheDocument()
    expect(screen.getByText('99.99%')).toBeInTheDocument()
    expect(screen.getByText('1M+')).toBeInTheDocument()
  })

  it('renders stat titles', () => {
    render(<Achievements />)
    expect(screen.getByText('Ratings')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Server Up time')).toBeInTheDocument()
    expect(screen.getByText('Love by customers')).toBeInTheDocument()
  })

  it('renders stat descriptions', () => {
    render(<Achievements />)
    expect(screen.getByText(/Consistently top-rated/)).toBeInTheDocument()
    expect(screen.getByText(/Satisfied customers/)).toBeInTheDocument()
    expect(screen.getByText(/Reliable infrastructure/)).toBeInTheDocument()
    expect(screen.getByText(/Over a million interactions/)).toBeInTheDocument()
  })
})
