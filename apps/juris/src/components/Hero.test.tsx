import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HERO } from '../data'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb and CTA over the background image', () => {
    render(<Hero />)
    const section = screen.getByRole('region', { name: 'Hero' })
    expect(section).toHaveStyle({ backgroundImage: `url(${HERO.image})` })
    expect(screen.getByRole('heading', { level: 1, name: HERO.title })).toBeInTheDocument()
    expect(screen.getByText(HERO.blurb)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: HERO.cta })).toHaveAttribute('href', HERO.ctaHref)
  })
})
