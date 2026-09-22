import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders subtitle, title, and description', () => {
    render(<Hero />)
    expect(screen.getByText('#1 Plastic Surgery Clinic')).toBeInTheDocument()
    expect(screen.getByText('Love the new you')).toBeInTheDocument()
    expect(screen.getByText(/world-class cosmetic procedures/)).toBeInTheDocument()
  })

  it('renders two action buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Read More' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Make an Appointment' })).toBeInTheDocument()
  })

  it('renders slider dots', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Slide 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Slide 2')).toBeInTheDocument()
    expect(screen.getByLabelText('Slide 3')).toBeInTheDocument()
  })
})
