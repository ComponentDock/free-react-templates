import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders both slide headings', () => {
    render(<Hero />)
    expect(screen.getByText(/Delicious Food/i)).toBeInTheDocument()
    expect(screen.getByText(/Fine Dining Experience/i)).toBeInTheDocument()
  })

  it('renders Get Started CTA buttons', () => {
    render(<Hero />)
    const buttons = screen.getAllByRole('button', { name: /Get Started/i })
    expect(buttons.length).toBeGreaterThanOrEqual(1)
  })
})
