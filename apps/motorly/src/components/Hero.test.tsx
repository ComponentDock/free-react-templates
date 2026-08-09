import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and services button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Welcome To Motorly Garage/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/long established fact/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Our Services/i })).toBeInTheDocument()
  })
})
