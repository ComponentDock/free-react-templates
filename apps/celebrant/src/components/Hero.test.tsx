import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { HERO_LABEL, HERO_PHOTO } from '../lib/site'
import { tokens } from '../test/match-media'

describe('Hero', () => {
  it('shows the full-height cover photograph with nothing written over it', () => {
    render(<Hero />)

    const hero = screen.getByRole('region', { name: HERO_LABEL })
    const photo = screen.getByTestId('hero-photo')

    expect(tokens(hero)).toEqual(expect.arrayContaining(['overflow-hidden', 'pt-[120px]']))
    expect(tokens(photo)).toEqual(expect.arrayContaining(['h-screen', 'min-h-[450px]', 'bg-cover', 'bg-center']))
    expect(photo.style.backgroundImage).toContain(HERO_PHOTO)
    expect(hero.textContent).toBe('')
    expect(hero.querySelector('button')).toBeNull()
    expect(hero.querySelector('h1, h2, h3, p')).toBeNull()
  })

  it('slides the mint band out behind the photograph', () => {
    render(<Hero />)

    const band = screen.getByTestId('hero-band')

    expect(band).toHaveAttribute('aria-hidden', 'true')
    expect(tokens(band)).toEqual(
      expect.arrayContaining(['absolute', 'bg-brand', 'top-[30%]', 'right-[-150%]', 'w-[200%]', 'z-[-1]']),
    )
    // The band's percentages resolve against the container, so the container is its own frame.
    expect(tokens(band.parentElement as Element)).toContain('relative')
    // The band stands in the same frame as the photograph, ahead of it, so the wash runs behind.
    expect(band.parentElement).toBe(screen.getByTestId('hero-photo').parentElement)
    expect(
      band.compareDocumentPosition(screen.getByTestId('hero-photo')) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
  })
})
