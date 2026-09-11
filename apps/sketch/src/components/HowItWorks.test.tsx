import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the section title', () => {
    render(<HowItWorks />)
    expect(screen.getByText('How it works')).toBeInTheDocument()
  })

  it('renders all three steps', () => {
    render(<HowItWorks />)
    expect(screen.getByText('1. Create an Account')).toBeInTheDocument()
    expect(screen.getByText('2. Create New Orders')).toBeInTheDocument()
    expect(screen.getByText('3. Ship and Track')).toBeInTheDocument()
  })

  it('renders step descriptions', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/connect your store/i)).toBeInTheDocument()
    expect(screen.getByText(/we store your inventory/i)).toBeInTheDocument()
    expect(screen.getByText(/as soon as a customer/i)).toBeInTheDocument()
  })
})
