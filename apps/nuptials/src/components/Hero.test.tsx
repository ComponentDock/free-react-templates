import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { COUPLE, HERO_CTA, HERO_EYEBROW, HERO_PHOTO, HERO_TAGLINE } from '../lib/site'

describe('Hero', () => {
  it('fills the opening frame with the photograph under the design washes', () => {
    const { container } = render(<Hero />)

    const hero = container.querySelector('section') as HTMLElement

    expect(hero).toHaveAttribute('id', 'home')
    expect(hero).toHaveClass('relative', 'overflow-hidden')

    const photo = hero.querySelector('div[aria-hidden="true"]') as HTMLElement

    expect(photo).toHaveClass('bg-cover', 'bg-center')
    expect(photo.getAttribute('style')).toContain(HERO_PHOTO)

    const layers = hero.querySelectorAll('span[aria-hidden="true"]')

    expect(layers).toHaveLength(2)
    expect((layers[0] as HTMLElement).className).toContain('bg-scrim')
    expect((layers[1] as HTMLElement).className).toContain('hero-wash')
  })

  it('sets the names over the photograph as the page only level-one heading', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading.textContent).toBe(`${COUPLE} ${HERO_TAGLINE}`)
    expect(heading).toHaveClass('text-white')
    expect(screen.getByText(HERO_EYEBROW)).toBeInTheDocument()
  })

  it('points its one call to action at the reservation band', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: HERO_CTA })).toHaveAttribute('href', '#reservation')
  })
})
