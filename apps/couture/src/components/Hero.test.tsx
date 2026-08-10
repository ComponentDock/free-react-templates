import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and sub-headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: /Le Stylist/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Wear Your Dress/ })).toBeInTheDocument()
  })

  it('renders the vertical side texts', () => {
    render(<Hero />)
    expect(screen.getByText(/Time to get dress/)).toBeInTheDocument()
    expect(screen.getByText(/Since — 1985/)).toBeInTheDocument()
  })

  it('renders a fashion photo with an alt text', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /Model wearing a couture dress/ })).toBeInTheDocument()
  })
})
