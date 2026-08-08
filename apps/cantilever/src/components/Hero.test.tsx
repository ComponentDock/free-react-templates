import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and Get Started button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      /Precise concept design for stylish living/i,
    )
    expect(screen.getByRole('link', { name: /Get Started/i })).toBeInTheDocument()
    expect(screen.getByAltText(/concept design/i)).toBeInTheDocument()
  })
})
