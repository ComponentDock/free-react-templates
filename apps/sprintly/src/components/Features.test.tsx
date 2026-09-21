import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders three feature cards', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Group Classes' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Personal Training' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Sports Nutrition' })).toBeInTheDocument()
  })

  it('shows descriptions for each feature', () => {
    render(<Features />)
    expect(screen.getByText(/High-energy group workouts/)).toBeInTheDocument()
    expect(screen.getByText(/One-on-one sessions/)).toBeInTheDocument()
    expect(screen.getByText(/Fuel your performance/)).toBeInTheDocument()
  })
})
