import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, intro paragraph and Get Started CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: /Design with love/i })).toBeInTheDocument()
    expect(screen.getByText(/higher conduct standards/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Get Started/i })).toBeInTheDocument()
  })

  it('renders the feature photo with an accessible name', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: 'Villa featured design' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
