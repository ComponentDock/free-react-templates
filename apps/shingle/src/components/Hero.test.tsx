import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading and CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Dedicated to Providing/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Book an Appointment/i })).toBeInTheDocument()
  })

  it('CTA links to appointment section', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /Book an Appointment/i })
    expect(cta).toHaveAttribute('href', '#appointment')
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/We Are Best Roofing Services/i)).toBeInTheDocument()
  })
})
