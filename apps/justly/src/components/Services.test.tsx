import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('What I Offer')).toBeInTheDocument()
  })

  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Body Building')).toBeInTheDocument()
    expect(screen.getByText('Muscle Gain')).toBeInTheDocument()
    expect(screen.getByText('Weight Loss')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/hypertrophy programs/)).toBeInTheDocument()
    expect(screen.getByText(/muscle-building routines/)).toBeInTheDocument()
    expect(screen.getByText(/fat-loss plans/)).toBeInTheDocument()
  })
})
