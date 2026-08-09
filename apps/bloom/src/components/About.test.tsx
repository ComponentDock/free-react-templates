import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the kicker, heading, supporting copy, and an appointment link', () => {
    render(<About />)

    expect(screen.getByText('Welcome to Bloom')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Skin & Beauty Care' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Make an Appointment' })).toHaveAttribute(
      'href',
      '#appointment',
    )
    expect(screen.getAllByRole('paragraph').length).toBeGreaterThan(0)
  })
})
