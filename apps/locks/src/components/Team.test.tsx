import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and four stylist cards', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /our hair stylist/i })).toBeInTheDocument()
    for (const name of ['Tom Smith', 'Mark Wilson', 'Patrick Jacobson', 'Ivan Dorchsner']) {
      expect(screen.getByRole('heading', { name: new RegExp(name, 'i') })).toBeInTheDocument()
    }
    expect(screen.getByText(/Hair Specialist/i)).toBeInTheDocument()
    expect(screen.getByText(/Beard Specialist/i)).toBeInTheDocument()
  })
})
