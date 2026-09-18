import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Food Catering')
  })

  it('renders the description text', () => {
    render(<Hero />)
    expect(screen.getByText(/exceptional catering services/i)).toBeInTheDocument()
  })

  it('renders the background image', () => {
    const { container } = render(<Hero />)
    const img = container.querySelector('img[src*="feast-hero"]')
    expect(img).toBeInTheDocument()
  })
})
