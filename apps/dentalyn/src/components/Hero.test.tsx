import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading, subtitle, and CTA buttons', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', {
        name: /we believe everyone should have easy access to great dental care/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/leading industry innovator/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })
})
