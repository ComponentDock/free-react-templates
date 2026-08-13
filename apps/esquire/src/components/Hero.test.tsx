import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { HERO_CTA, HERO_IMAGE, HERO_TAGLINE, HERO_TITLE } from '../data'

describe('Hero', () => {
  it('renders the dark banner with the serif headline, tagline and outlined gold CTA', () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole('heading', { name: HERO_TITLE })).toBeInTheDocument()
    expect(screen.getByText(HERO_TAGLINE)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: HERO_CTA })
    expect(cta).toHaveAttribute('href', '#about')
    expect(cta.className).toContain('border-brand')
    expect(cta.className).toContain('text-brand')
    expect(cta.className).toContain('hover:bg-brand')

    const banner = container.querySelector('img')
    expect(banner).toHaveAttribute('src', HERO_IMAGE)
    expect(banner).toHaveAttribute('alt', '')
  })
})
