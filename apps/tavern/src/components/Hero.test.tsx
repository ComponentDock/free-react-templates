import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders hero heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Expert Chefs')
  })

  it('renders subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText(/Crafting exceptional dishes/)).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /get started/i })).toHaveAttribute('href', '#menu')
  })
})
