import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the section heading', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('heading', { name: 'How it works' })).toBeInTheDocument()
  })

  it('renders all four steps', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('heading', { name: 'Pick Destination' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Select Term' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Choose A Car' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Enjoy The Ride' })).toBeInTheDocument()
  })

  it('renders step descriptions', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/Choose where you want to go/)).toBeInTheDocument()
    expect(screen.getByText(/Pick your rental period/)).toBeInTheDocument()
    expect(screen.getByText(/Browse our fleet/)).toBeInTheDocument()
    expect(screen.getByText(/Hit the road/)).toBeInTheDocument()
  })
})
