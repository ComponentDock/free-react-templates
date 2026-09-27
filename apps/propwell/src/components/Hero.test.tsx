import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)

    expect(screen.getByText(/Find your place with our/)).toBeInTheDocument()
    expect(screen.getByText(/local life style/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)

    expect(screen.getByText('View Detail')).toBeInTheDocument()
  })

  it('has an aria-label', () => {
    render(<Hero />)

    expect(screen.getByLabelText('Hero')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)

    expect(screen.getByText(/Discover the best properties/)).toBeInTheDocument()
  })
})
