import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subline and CTA buttons over a photo', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /We believe that love is a celebration to be cherished/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('Creative director')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About Us/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View More/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Play/i })).toBeInTheDocument()
  })

  it('renders a seeded placeholder photo with a dark overlay', () => {
    render(<Hero />)
    const image = screen.getByRole('img', { name: /bride and groom/i })
    expect(image.getAttribute('src')).toMatch(/picsum\.photos\/seed\/wedlock-1\//)
    expect(image.getAttribute('alt')).toMatch(/wedding/i)
  })
})
