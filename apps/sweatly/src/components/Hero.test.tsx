import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline, lead, and outline CTA', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Fitness Help Me Feel Better' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Push your limits with expert coaching/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute('href', '#classes')
  })
})
