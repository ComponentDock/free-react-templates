import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { HERO, PHONE_HREF, RATING, RATING_NOTE } from '../content'

describe('Hero', () => {
  it('renders one h1, the bronze kicker and both ledes', () => {
    render(<Hero />)

    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    expect(headings[0]).toHaveTextContent(HERO.headline)
    expect(headings[0]).toHaveClass('font-serif', 'text-4xl', 'leading-[1.1]', 'text-ink-800')

    expect(screen.getByText(HERO.kicker)).toHaveClass('tracking-[0.2em]', 'text-primary-700')
    expect(screen.getByText(HERO.lede)).toHaveClass('max-w-xl', 'text-lg', 'text-ink-500')
    expect(screen.getByText(HERO.lede2)).toHaveClass('max-w-xl', 'text-lg', 'text-ink-500')
  })

  it('carries the 4:5 portrait with its instructional caption', () => {
    render(<Hero />)
    const image = screen.getByRole('img', { name: HERO.imageAlt })
    expect(image).toHaveClass('aspect-[4/5]', 'rounded-2xl', 'object-cover')
    expect(screen.getByText(HERO.figcaption)).toHaveClass('text-sm', 'text-ink-400')
  })

  it('puts the phone pill and the rating row on one wrapping line', () => {
    render(<Hero />)
    const pill = screen.getByRole('link', { name: HERO.cta })
    expect(pill).toHaveAttribute('href', PHONE_HREF)
    expect(screen.getByText(RATING)).toHaveClass('font-bold')
    expect(screen.getByText(RATING_NOTE)).toHaveClass('opacity-80')
    expect(screen.getByRole('img', { name: `Rated ${RATING} out of 5` })).toBeInTheDocument()
  })
})
