import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders a level-1 headline and a call-to-action button', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Our Hair Style make your look elegance',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'make an appointment now' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('shows the supporting tagline', () => {
    render(<Hero />)
    expect(screen.getByText(/elegance starts with a great cut/i)).toBeInTheDocument()
  })
})
