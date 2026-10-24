import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, supporting copy, CTA buttons, and stats', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Where Every Pet Gets the Royal Treatment' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Professional grooming, loving daycare/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book an Appointment' })).toHaveAttribute(
      'href',
      '#book',
    )
    expect(screen.getByRole('link', { name: 'View Services' })).toHaveAttribute('href', '#services')
    expect(screen.getByText('10K+')).toBeInTheDocument()
    expect(screen.getByText('Happy Pets')).toBeInTheDocument()
    expect(screen.getByText('8+')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('4.9')).toBeInTheDocument()
    expect(screen.getByText('Rating')).toBeInTheDocument()
  })
})
