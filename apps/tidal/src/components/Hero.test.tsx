import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtitle, and CTA button', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Discover Your Favorite Place with Us')

    expect(screen.getByText(/Travel to any corner of the world/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Search Destination' })).toBeInTheDocument()
  })

  it('links the CTA to the destination section', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: 'Search Destination' })
    expect(link).toHaveAttribute('href', '#destination')
  })
})
