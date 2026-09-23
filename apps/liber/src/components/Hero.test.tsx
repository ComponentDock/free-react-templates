import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the author name, headline, and buy button', () => {
    render(<Hero />)
    expect(screen.getByText(/Author: Travor James/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('New Adventure')
    expect(screen.getByRole('link', { name: /Buy Now/i })).toBeInTheDocument()
  })

  it('renders the book cover image', () => {
    render(<Hero />)
    expect(screen.getByAltText(/Book cover/i)).toBeInTheDocument()
  })
})
