import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the eyebrow, headline, blurb, button, and hero image', () => {
    render(<Hero />)
    expect(screen.getByText(/Skyline/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /Properties Now In City/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/lorem ipsum dolor sit amet/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Learn More/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /aerial view of a residential/i })).toBeInTheDocument()
  })
})
