import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('shows the eyebrow pill, headline, subcopy and pink CTA', () => {
    render(<Hero />)

    const eyebrow = screen.getByText(hero.eyebrow)
    expect(eyebrow.className).toMatch(/rounded-full/)

    expect(screen.getByRole('heading', { level: 1, name: hero.headline })).toBeInTheDocument()
    expect(screen.getByText(hero.subcopy)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: new RegExp(hero.ctaLabel) })
    expect(cta).toHaveAttribute('href', '#services')
    expect(cta.className).toMatch(/from-brand/)
  })

  it('renders a decorative circular play button over the hero', () => {
    render(<Hero />)

    const play = screen.getByRole('button', { name: hero.playLabel })
    expect(play.className).toMatch(/rounded-full/)
    expect(document.querySelector('svg.lucide-play')).toBeInTheDocument()
    expect(play).not.toHaveAttribute('onClick')
  })
})
