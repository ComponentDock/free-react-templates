import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the featured car card with heading, specs, price, and Rent Now button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 2, name: /Range Rover S7/i })).toBeInTheDocument()
    expect(screen.getByText('Doors')).toBeInTheDocument()
    expect(screen.getByText('Seats')).toBeInTheDocument()
    expect(screen.getByText('Luggage')).toBeInTheDocument()
    expect(screen.getByText('Transmission')).toBeInTheDocument()
    expect(screen.getByText('$150')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Rent Now' })).toHaveAttribute('href', '#cars')
  })
})
