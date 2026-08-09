import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the kicker, heading, and four steps', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/Work flow/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /How it works/i })).toBeInTheDocument()
    for (const step of ['Pick Destination', 'Select Term', 'Choose A Car', 'Enjoy The Ride']) {
      expect(screen.getByRole('heading', { name: step })).toBeInTheDocument()
    }
  })
})
