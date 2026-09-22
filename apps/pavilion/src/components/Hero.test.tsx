import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading and subtitle', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Top Hotel in the City/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Hotel & Resort/i)).toBeInTheDocument()
  })

  it('renders the hero background image', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /Pavilion hotel/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
