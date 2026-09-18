import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading, subheading, CTA button, and slider arrows', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Explore the World')

    expect(screen.getByText(/Discover breathtaking destinations/)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: "Let's Go" })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })

  it('displays a background hero image from picsum', () => {
    render(<Hero />)

    const image = screen.getByRole('img', { name: /scenic travel/i })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    expect(image).toHaveAttribute('src', expect.stringContaining('travelogue-hero'))
  })
})
