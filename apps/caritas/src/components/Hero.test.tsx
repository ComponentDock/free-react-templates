import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { HERO_CTA_LABEL, HERO_SUBTITLE, HERO_TITLE } from '../data'

describe('Hero', () => {
  it('renders the headline, subtitle and Start Donation CTA', () => {
    const { container } = render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain(HERO_TITLE)
    expect(screen.getByText(HERO_SUBTITLE)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: HERO_CTA_LABEL })
    expect(cta).toHaveAttribute('href', '#causes')
    // .btn_2 recipe: white bg + purple border/text + asymmetric radius.
    expect(cta.className).toContain('bg-white')
    expect(cta.className).toContain('border-brand')

    // Seeded picsum backdrop via inline style.
    const section = container.querySelector('section')
    expect(section?.getAttribute('style')).toContain('caritas-hero')
  })

  it('renders the video block with a play button and purple overlay', () => {
    const { container } = render(<Hero />)

    // Decorative photo (alt="") has no img role — query the DOM directly.
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(1)
    expect(images[0]?.getAttribute('src')).toContain('caritas-video')

    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()

    // Purple gradient overlay (aria-hidden).
    const overlay = container.querySelector('[aria-hidden="true"]')
    expect(overlay?.className).toContain('linear-gradient(16deg,#9300ff_0%,#d500ff_100%)')
  })
})
