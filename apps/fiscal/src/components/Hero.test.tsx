import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { HERO, VIDEO_URL } from '../data'

describe('Hero', () => {
  it('renders the headline, subtext, CTA button, and video link', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(HERO.headline)
    expect(screen.getByText(HERO.subtext)).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: HERO.ctaLabel })
    expect(cta).toHaveAttribute('href', '#contact-section')
    const video = screen.getByRole('link', { name: HERO.watchLabel })
    expect(video).toHaveAttribute('href', VIDEO_URL)
    expect(video).toHaveAttribute('target', '_blank')
  })

  it('shows the hero image', () => {
    render(<Hero />)
    const image = screen.getByRole('img', { name: /business professional/i })
    expect(image).toHaveAttribute('src', HERO.image)
  })
})
