import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline, supporting copy, and both CTA buttons', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(
      'Highest Quality Care For Pets',
    )
    expect(screen.getByText(/We know you love your pets/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute('href', '#pricing')
  })
})
