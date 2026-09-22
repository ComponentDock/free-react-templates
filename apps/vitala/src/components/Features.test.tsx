import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all three feature cards', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Emergency Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Doctors Schedule' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Online Appointment' })).toBeInTheDocument()
  })

  it('renders CTAs for each feature', () => {
    render(<Features />)
    expect(screen.getByRole('link', { name: /Call Us/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Learn More/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get Appointment/i })).toBeInTheDocument()
  })
})
