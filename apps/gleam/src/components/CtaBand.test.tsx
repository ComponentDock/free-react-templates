import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the heading, discount offer, and both buttons', () => {
    render(<CtaBand />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Ready for a Spotless Space?' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/20% off their initial cleaning/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Free Quote' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Call Now' })).toBeInTheDocument()
  })
})
