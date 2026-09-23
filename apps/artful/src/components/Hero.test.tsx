import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Crafting Best Experience/i })).toBeInTheDocument()
    expect(screen.getByText(/We provide best art/i)).toBeInTheDocument()
  })

  it('renders a CTA link', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Get Started/i })).toHaveAttribute('href', '#contact')
  })
})
