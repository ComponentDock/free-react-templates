import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline text', () => {
    render(<Hero />)
    expect(screen.getByText(/professional Photographer/)).toBeInTheDocument()
    expect(screen.getByText(/I Captured Moments/)).toBeInTheDocument()
  })

  it('renders the Explore Work button', () => {
    render(<Hero />)
    const btn = screen.getByText('Explore Work')
    expect(btn).toBeInTheDocument()
    expect(btn.tagName).toBe('A')
  })
})
