import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Gaze.*Gallery/s)
  })

  it('renders the subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText(/Photography Showcase/i)).toBeInTheDocument()
  })

  it('renders the Read More button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })
})
