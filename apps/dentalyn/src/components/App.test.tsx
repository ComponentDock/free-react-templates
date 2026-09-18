import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from '../App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    expect(screen.getAllByRole('link', { name: 'Dentalyn' }).length).toBeGreaterThanOrEqual(1)
    expect(
      screen.getByRole('heading', {
        name: /we believe everyone should have easy access/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText('Years Of Experience')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Pricing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Book An Appointment' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Dentist' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'The Latest News' })).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
