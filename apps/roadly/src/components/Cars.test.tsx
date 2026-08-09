import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cars } from './Cars'

describe('Cars', () => {
  it('renders the kicker, heading, and eight car cards', () => {
    render(<Cars />)
    expect(screen.getByText(/What we offer/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Choose Your Car/i })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: /Mercedes Grand Sedan/i })).toHaveLength(8)
    expect(screen.getAllByText('$25')).toHaveLength(8)
    expect(screen.getAllByRole('link', { name: /Book now/i })).toHaveLength(8)
    expect(screen.getAllByRole('link', { name: /Details/i })).toHaveLength(8)
  })

  it('shows the daily price format on each card', () => {
    render(<Cars />)
    expect(screen.getAllByText(/From \/Day/i).length).toBeGreaterThan(0)
  })
})
