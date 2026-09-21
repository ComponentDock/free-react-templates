import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and tagline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: /Crafted Coffee/i })).toBeInTheDocument()
    expect(screen.getByText(/Perfectly Blended/i)).toBeInTheDocument()
  })

  it('renders the CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Explore Menu/i })).toHaveAttribute('href', '#menu')
    expect(screen.getByRole('link', { name: /Our Story/i })).toHaveAttribute('href', '#about')
  })

  it('renders the background image with an accessible name', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /Freshly brewed coffee/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
