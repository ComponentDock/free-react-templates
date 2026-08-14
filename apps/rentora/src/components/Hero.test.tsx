import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { HERO } from '../data'

describe('Hero', () => {
  it('shows the kicker, headline, blurb, and gold View Property button', () => {
    render(<Hero />)

    expect(screen.getByText(HERO.kicker)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: HERO.headline }),
    ).toBeInTheDocument()
    expect(screen.getByText(HERO.blurb)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: HERO.ctaLabel })).toBeInTheDocument()
  })

  it('shows the skyscraper photo, the gold play button, and the social icon links', () => {
    const { container } = render(<Hero />)

    const img = container.querySelector('img')!
    expect(img).toHaveAttribute('src', HERO.image)

    expect(screen.getByRole('link', { name: HERO.playLabel })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'instagram' })).toBeInTheDocument()
  })
})
