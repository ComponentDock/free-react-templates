import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByText('Beautiful Carousel Showcase')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Hero />)
    expect(screen.getByText(/Explore stunning travel destinations/i)).toBeInTheDocument()
  })

  it('renders two CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /explore carousel/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view features/i })).toBeInTheDocument()
  })

  it('has correct href for Explore Carousel button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /explore carousel/i })).toHaveAttribute(
      'href',
      '#carousel',
    )
  })

  it('has correct href for View Features button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /view features/i })).toHaveAttribute(
      'href',
      '#features',
    )
  })
})
