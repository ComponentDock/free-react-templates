import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the name heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /I'm Alex Morgan/i })).toBeInTheDocument()
  })

  it('shows photographer and speaker roles', () => {
    render(<Hero />)
    expect(screen.getByText(/Photographer/)).toBeInTheDocument()
    expect(screen.getByText(/Speaker/)).toBeInTheDocument()
  })

  it('renders a contact CTA button', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /contact me/i })
    expect(cta).toHaveAttribute('href', '#contact')
  })
})
