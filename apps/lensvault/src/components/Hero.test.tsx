import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('displays the main heading', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /lensvault photography/i }),
    ).toBeInTheDocument()
  })

  it('shows subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText(/capturing moments that last forever/i)).toBeInTheDocument()
  })

  it('has an Explore Gallery button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /explore gallery/i })).toBeInTheDocument()
  })
})
