import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { HERO, IMAGES } from '../data'

describe('Hero', () => {
  it('renders the video link, headline and both CTAs over the photo hero', () => {
    const { container } = render(<Hero />)
    const section = screen.getByRole('region', { name: 'Hero' })
    expect(section.className).toContain('h-[900px]')

    const videoLink = screen.getByRole('link', { name: /Watch The Overview/ })
    expect(videoLink).toHaveAttribute('href', HERO.videoUrl)
    expect(videoLink).toHaveAttribute('target', '_blank')

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(HERO.headline)

    expect(screen.getByRole('link', { name: 'About Us' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Get a quote' })).toHaveAttribute('href', '#contact')

    // The photo hero keeps the overlay div and the picsum background.
    const overlay = Array.from(container.querySelectorAll('div')).find((el) =>
      el.className.includes('rgba(4,8,29,0.7)'),
    )
    expect(overlay).toBeDefined()
    expect(section.style.backgroundImage).toContain(IMAGES.hero)
  })
})
