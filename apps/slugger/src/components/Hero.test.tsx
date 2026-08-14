import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, copy, and both CTAs', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /fieldrun baseball club/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/a small river named duden/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Watch match' })).toHaveAttribute('href', '#games')
    expect(screen.getByRole('link', { name: 'Get ticket' })).toHaveAttribute('href', '#games')
  })

  it('uses the seeded hero background image', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section?.getAttribute('style')).toContain('picsum.photos/seed/slugger-hero')
  })
})
