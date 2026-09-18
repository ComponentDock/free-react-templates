import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and subtitle', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Welcome To Elixir/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Effective Medicine/i)).toBeInTheDocument()
  })

  it('renders the Shop Now button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Shop Now/i })).toHaveAttribute('href', '#products')
  })

  it('renders the background image with an accessible name', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /Pharmacy shelves/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
