import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and price tag', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Luxury Living Redefined/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('$1,250,000')).toBeInTheDocument()
  })

  it('renders the address text', () => {
    render(<Hero />)
    expect(screen.getByText(/198 West 21th Street, Suite 721/)).toBeInTheDocument()
  })

  it('renders the background image with an accessible name', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /Beautiful modern home/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
