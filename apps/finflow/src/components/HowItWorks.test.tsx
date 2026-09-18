import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the section heading and step titles', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('heading', { name: /How It Works/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Online Applications' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get an Approval' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Card Delivery' })).toBeInTheDocument()
  })

  it('has Learn More buttons for each step', () => {
    render(<HowItWorks />)
    const buttons = screen.getAllByRole('link', { name: /Learn More/i })
    expect(buttons).toHaveLength(3)
  })
})
