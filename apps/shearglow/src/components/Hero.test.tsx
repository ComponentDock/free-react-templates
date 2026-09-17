import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading, subtext, and CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /We Care About Your Hair/i })).toBeInTheDocument()
    expect(screen.getByText(/Beautiful hair begins/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About Us/i })).toBeInTheDocument()
  })

  it('renders the hero background image', () => {
    render(<Hero />)
    const section = screen
      .getByRole('heading', { name: /We Care About Your Hair/i })
      .closest('section')!
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('picsum.photos') })
  })
})
