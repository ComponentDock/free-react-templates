import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { HERO, RATING_NOTE } from '../content'

describe('Hero', () => {
  it('carries one h1, the eyebrow, the lede and the rating line', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO.headline)
    expect(screen.getByText(HERO.eyebrow)).toBeInTheDocument()
    expect(screen.getByText(HERO.lede)).toBeInTheDocument()
    expect(screen.getByText(RATING_NOTE)).toBeInTheDocument()
  })

  it('links the two CTAs to the quiz and the catalogue', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: HERO.primaryCta })).toHaveAttribute('href', '#quiz')
    expect(screen.getByRole('link', { name: HERO.secondaryCta })).toHaveAttribute(
      'href',
      '#products',
    )
  })

  it('uses a square placeholder photograph of the installed unit', () => {
    render(<Hero />)
    const image = screen.getByRole('img', { name: HERO.imageAlt })
    expect(image).toHaveAttribute('src', HERO.image)
    expect(image.className).toContain('aspect-square')
    expect(image.className).toContain('rounded-2xl')
  })
})
