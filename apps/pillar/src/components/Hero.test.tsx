import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading and CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Interior Design/i, level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get Started/i })).toHaveAttribute('href', '#contact')
  })

  it('renders the subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText(/Crafting spaces that inspire/i)).toBeInTheDocument()
  })
})
