import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Rooms } from './Rooms'

describe('Rooms', () => {
  it('renders the heading and three room cards with prices, features, and booking buttons', () => {
    render(<Rooms />)

    expect(screen.getByRole('heading', { name: 'Rooms & Suites' })).toBeInTheDocument()

    for (const name of ['Deluxe Ocean Room', 'Premium Suite', 'Presidential Villa']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }

    expect(screen.getByText('$299')).toBeInTheDocument()
    expect(screen.getByText('$499')).toBeInTheDocument()
    expect(screen.getByText('$899')).toBeInTheDocument()

    expect(screen.getAllByText('King Bed').length).toBe(2)
    expect(screen.getByText('Ocean View')).toBeInTheDocument()
    expect(screen.getByText('45 sqm')).toBeInTheDocument()
    expect(screen.getByText('Balcony')).toBeInTheDocument()
    expect(screen.getByText('Panoramic View')).toBeInTheDocument()
    expect(screen.getByText('Jacuzzi')).toBeInTheDocument()
    expect(screen.getByText('Private Pool')).toBeInTheDocument()
    expect(screen.getByText('Butler Service')).toBeInTheDocument()

    expect(screen.getAllByRole('link', { name: 'Book This Room' }).length).toBe(3)
  })
})
