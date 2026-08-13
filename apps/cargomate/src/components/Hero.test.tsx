import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the split headline, copy, and CTA button', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Solid Super Service' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore More' })).toHaveAttribute('href', '#quote')
  })
})
