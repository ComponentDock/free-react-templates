import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, sub-paragraph, and ghost CTA', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Capturing Moments That Last Forever' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/fine art and documentary photography that tells your story/i),
    ).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: 'View Portfolio' })
    expect(cta).toHaveAttribute('href', '#portfolio')
  })

  it('renders a background image with an overlay', () => {
    render(<Hero />)
    const image = screen.getByRole('img', { name: /mountain landscape at sunset/i })
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/shutter-hero/1920/1080')
  })
})
