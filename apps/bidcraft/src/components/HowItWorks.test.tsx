import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the section heading', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('heading', { name: /How.*It Works/ })).toBeInTheDocument()
  })

  it('renders 4 step items', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('heading', { name: 'Register' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Buy or Bid' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Submit a Bid' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Win' })).toBeInTheDocument()
  })

  it('renders step descriptions', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/Create your free account/)).toBeInTheDocument()
    expect(screen.getByText(/Browse our marketplace/)).toBeInTheDocument()
    expect(screen.getByText(/Found something you want/)).toBeInTheDocument()
    expect(screen.getByText(/When the auction ends/)).toBeInTheDocument()
  })

  it('has the How It Works landmark', () => {
    render(<HowItWorks />)
    expect(screen.getByLabelText('How It Works')).toBeInTheDocument()
  })
})
