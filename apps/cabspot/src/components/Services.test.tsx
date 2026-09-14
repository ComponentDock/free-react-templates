import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section title', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /what services we offer/i })).toBeInTheDocument()
  })

  it('renders all three service cards with correct titles', () => {
    render(<Services />)
    expect(screen.getByText('Taxi Service')).toBeInTheDocument()
    expect(screen.getByText('Office Pick-ups')).toBeInTheDocument()
    expect(screen.getByText('Event Transportation')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/fast and reliable taxi rides/i)).toBeInTheDocument()
    expect(screen.getByText(/convenient pick-up and drop-off/i)).toBeInTheDocument()
    expect(screen.getByText(/group transportation for events/i)).toBeInTheDocument()
  })
})
