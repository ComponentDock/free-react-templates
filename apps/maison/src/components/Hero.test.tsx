import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders a level-1 heading with the posh living pitch', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Posh living/i)
  })

  it('renders the hero photo and call-to-action button', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /featured design/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Learn More About Precise Design/i }),
    ).toBeInTheDocument()
  })
})
