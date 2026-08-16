import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the split hero with headline, portrait, intro and CTA', () => {
    const { container } = render(<Hero />)

    const section = container.querySelector('section')!
    expect(section.className).toContain('bg-peach')
    const photo = section.querySelector('div[style]')!
    expect(photo.getAttribute('style')).toContain('wordwright-hero')

    // Yellow caption block behind the left column.
    const block = container.querySelector('div[aria-hidden="true"]')!
    expect(block.className).toContain('bg-brand')
    expect(block.className).toContain('w-[55%]')
    expect(block.className).toContain('h-[82%]')

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(new RegExp(hero.headline))
    expect(heading.className).toContain('border-ink')

    expect(screen.getByRole('img', { name: hero.portraitAlt })).toBeInTheDocument()
    expect(screen.getByText(hero.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: hero.intro })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: hero.ctaLabel })).toBeInTheDocument()
  })
})
