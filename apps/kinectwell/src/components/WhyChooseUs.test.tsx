import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'
import { describe, expect, it } from 'vitest'

describe('WhyChooseUs', () => {
  it('renders the title', () => {
    render(<WhyChooseUs />)
    expect(screen.getByRole('heading', { name: /why choose us/i })).toBeInTheDocument()
  })

  it('renders all four feature items', () => {
    render(<WhyChooseUs />)
    expect(screen.getByRole('heading', { name: 'Professional Staff' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Certified Equipment' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Emergency Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Opening Hours' })).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/board-certified physical therapists/)).toBeInTheDocument()
    expect(screen.getByText(/latest rehabilitation equipment/)).toBeInTheDocument()
    expect(screen.getByText(/Same-day appointments/)).toBeInTheDocument()
    expect(screen.getByText(/Monday through Saturday/)).toBeInTheDocument()
  })
})
