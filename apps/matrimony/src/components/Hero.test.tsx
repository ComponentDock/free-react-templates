import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { HERO_EYEBROW, HERO_TAGLINE } from '../lib/site'

describe('Hero', () => {
  it('opens with the photograph under the design very light wash', () => {
    const { container } = render(<Hero />)

    const photo = screen.getByTestId('hero-photo')

    expect(photo).toHaveClass('absolute', 'inset-0', 'bg-cover', 'bg-center')
    expect(photo.getAttribute('style')).toContain('picsum.photos/seed/matrimony-34')

    const scrims = Array.from(container.querySelectorAll('span[aria-hidden="true"]'))

    expect(scrims.some((scrim) => scrim.className.includes('bg-scrim'))).toBe(true)
  })

  it('prints the date over the couple names and the line beneath', () => {
    render(<Hero />)

    expect(screen.getByText(HERO_EYEBROW)).toHaveClass(
      'tracking-[0.3em]',
      'uppercase',
      'text-white',
    )

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading.textContent).toMatch(/Amias\s*Isolde/)
    expect(heading).toHaveClass('text-[52px]', 'xl:text-[99px]', 'text-white')
    expect(screen.getByText(HERO_TAGLINE)).toHaveClass('uppercase', 'tracking-[0.2em]')
  })

  it('draws its ornaments inline and keeps the caption animating only when motion is welcome', () => {
    const { container } = render(<Hero />)

    const ornaments = container.querySelectorAll('svg')

    expect(ornaments).toHaveLength(2)

    for (const ornament of ornaments) {
      expect(ornament).toHaveAttribute('aria-hidden', 'true')
    }

    const caption = screen.getByRole('heading', { level: 1 }).parentElement as HTMLElement

    expect(caption).toHaveClass('motion-safe:animate-[rise-in_900ms_ease-out]')
  })
})
