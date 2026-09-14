import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading and CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: /Hello! I'm Simon/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /available for hire/i })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Welcome & Enjoy/i)).toBeInTheDocument()
  })

  it('renders the background image', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /creative workspace/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
