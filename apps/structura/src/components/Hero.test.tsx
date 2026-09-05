import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Discover/i })).toBeInTheDocument()
  })

  it('renders the supporting text', () => {
    render(<Hero />)
    expect(screen.getByText(/50,000/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /See Projects/i })).toBeInTheDocument()
  })
})
