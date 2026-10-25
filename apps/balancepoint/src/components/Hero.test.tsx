import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HERO } from '../content'
import { Hero } from './Hero'

describe('Hero', () => {
  it('lands exactly one h1 and splits it into the promise and its lime second line', () => {
    render(<Hero />)
    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    const h1 = headings[0]!
    expect(h1.textContent).toBe(`${HERO.heading}${HERO.headingAccent}`)
    const accent = Array.from(h1.querySelectorAll('span')).find(
      (node) => node.textContent === HERO.headingAccent,
    )
    expect(accent?.className).toContain('text-primary-600')
  })

  it('carries the eyebrow, the lede and the four ticks', () => {
    render(<Hero />)
    expect(screen.getByText(HERO.eyebrow)).toBeInTheDocument()
    expect(screen.getByText(HERO.lede)).toBeInTheDocument()
    HERO.ticks.forEach((tick) => expect(screen.getByText(tick)).toBeInTheDocument())
  })

  it('prints the rating line with the sample-data caveat', () => {
    render(<Hero />)
    expect(screen.getByText(HERO.ratingScore)).toBeInTheDocument()
    expect(screen.getByText(HERO.ratingCaption)).toBeInTheDocument()
  })

  it('puts the quote card in the right rail on the grey ground', () => {
    render(<Hero />)
    const band = document.querySelector('main section, section') as HTMLElement
    expect(band.className).toContain('bg-ink-50')
    expect(document.getElementById('quote')).not.toBeNull()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Get your net price')
  })
})
