import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading, description, and action links', () => {
    render(<Hero />)
    expect(screen.getByText(/Featured Stories Carousel/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /Discover Inspiring Stories & Visuals/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explore Showcase/i })).toHaveAttribute(
      'href',
      '#showcase',
    )
    expect(screen.getByRole('link', { name: /Learn More/i })).toHaveAttribute('href', '#features')
  })
})
