import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the tag, headline, learn more button, and hero image', () => {
    render(<Hero />)
    expect(screen.getByText(/architecture \+ design/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /Terracotta latest project/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /modern building facade/i })).toBeInTheDocument()
  })
})
