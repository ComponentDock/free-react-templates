import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Quote } from './Quote'

describe('Quote', () => {
  it('renders the quote text', () => {
    render(<Quote />)
    expect(
      screen.getByText(/training gives us an outlet for suppressed energies/i),
    ).toBeInTheDocument()
  })

  it('renders the attribution', () => {
    render(<Quote />)
    expect(screen.getByText(/arnold schwarzenegger/i)).toBeInTheDocument()
  })
})
