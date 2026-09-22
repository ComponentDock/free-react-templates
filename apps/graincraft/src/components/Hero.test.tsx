import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, tagline and Contact Us button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /New Construction, Remodeling, Additions/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Quality Woodwork for Every Project/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact Us/i })).toBeInTheDocument()
  })

  it('renders the background image with an accessible name', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /Woodworking workshop/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
