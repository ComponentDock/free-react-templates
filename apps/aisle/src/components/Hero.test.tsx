import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { HERO_DATE, HERO_INVITE, HERO_LABEL, HERO_NAMES, HERO_PHOTO, HERO_PHOTO_ALT, HERO_SCRIPT } from '../lib/site'

describe('Hero', () => {
  it('fills the first viewport with the app own photograph and its scrim', () => {
    const { container } = render(<Hero />)

    const band = screen.getByRole('region', { name: HERO_LABEL })

    expect(band).toHaveClass('h-screen', 'min-h-[400px]', 'text-white')
    expect(band.id).toBe('home')

    const photo = screen.getByRole('img', { name: HERO_PHOTO_ALT })

    expect(photo).toHaveAttribute('src', HERO_PHOTO)
    expect(photo).toHaveClass('absolute', 'inset-0', 'h-full', 'w-full', 'object-cover')

    const scrim = container.querySelector('[aria-hidden="true"]') as HTMLElement

    expect(scrim).toHaveClass('bg-scrim')
  })

  it('stacks the glyph, the tracked date, the script line and the names in one heading', () => {
    const { container } = render(<Hero />)

    expect(screen.getByText(HERO_DATE)).toHaveClass('text-[1.2rem]', 'uppercase', 'tracking-[2px]')
    expect(screen.getByText(HERO_SCRIPT)).toHaveClass('font-display', 'text-[2.5rem]')

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toHaveClass('text-[3rem]', 'md:text-[4rem]', 'lg:text-[5rem]')
    expect(heading.textContent).toBe(`${HERO_NAMES[0]}${HERO_NAMES[1]}`)
    expect(screen.getByText(HERO_INVITE)).toBeInTheDocument()
    expect(container.querySelector('h1')).toBe(heading)
    expect(heading.querySelector('svg')?.getAttribute('class')).toContain('text-brand')
    expect(container.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(2)
  })
})
