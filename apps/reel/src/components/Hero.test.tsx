import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading, tagline, and call-to-action links', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Beautiful Carousel Showcase',
    )

    expect(screen.getByText(/Explore stunning travel destinations/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Explore Carousel/i })).toHaveAttribute(
      'href',
      '#carousel',
    )

    expect(screen.getByRole('link', { name: /View Features/i })).toHaveAttribute(
      'href',
      '#features',
    )
  })
})
