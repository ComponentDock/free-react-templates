import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subheading, and tagline', () => {
    render(<Hero />)

    expect(screen.getByText(/the most interesting food in the world/i)).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Discover the flavors of/i)
    expect(heading.textContent).toMatch(/forkful/i)

    expect(screen.getByText(/a restaurant landing page celebrating/i)).toBeInTheDocument()
  })
})
