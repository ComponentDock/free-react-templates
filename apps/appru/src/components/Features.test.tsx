import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading, blurb, and three feature tiles', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { level: 2, name: 'Unique Features' })).toBeInTheDocument()

    expect(
      screen.getByText(/Everything you need to launch, grow, and support your app/),
    ).toBeInTheDocument()

    for (const title of ['Expert Technicians', 'Professional Service', 'Great Support']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(
      screen.getByText(/Certified specialists handle setup, tuning, and maintenance/),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/White-glove service from onboarding through every update/),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Friendly experts are a message away whenever you need them/),
    ).toBeInTheDocument()
  })
})
