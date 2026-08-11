import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders a full-bleed cover hero with the seeded photo and grayscale treatment', () => {
    const { container } = render(<Hero />)

    const section = container.querySelector('section#home') as HTMLElement
    expect(section).not.toBeNull()
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/succor-hero/1920/1080')
    expect(section.className).toMatch(/bg-cover/)
    expect(section.className).toMatch(/grayscale/)
    expect(section.className).toMatch(/h-\[800px\]/)
  })

  it('renders a 10%-opacity white overlay over the hero', () => {
    const { container } = render(<Hero />)

    const overlay = container.querySelector('[class*="bg-white/10"]') as HTMLElement
    expect(overlay).not.toBeNull()
    expect(overlay).toHaveAttribute('aria-hidden', 'true')
    expect(overlay.className).toMatch(/absolute inset-0/)
  })

  it('renders the headline in white uppercase weight-900 with 5px tracking', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('We can help to save the world')
    expect(heading.className).toMatch(/font-black/)
    expect(heading.className).toMatch(/uppercase/)
    expect(heading.className).toMatch(/tracking-\[5px\]/)
    expect(heading.className).toMatch(/text-white/)
  })

  it('renders the black "How Can I Help" button', () => {
    render(<Hero />)

    const cta = screen.getByRole('link', { name: 'How Can I Help' })
    expect(cta).toHaveAttribute('href', '#about')
    expect(cta.className).toMatch(/bg-black/)
    expect(cta.className).toMatch(/rounded-\[3px\]/)
    expect(cta.className).toMatch(/font-bold/)
  })

  it('renders the vertical "Play video" link with a play icon box', () => {
    const { container } = render(<Hero />)

    const playLink = screen.getByRole('link', { name: /Play video/ })
    expect(playLink).toHaveAttribute('href', 'https://vimeo.com/45830194')
    expect(playLink).toHaveAttribute('target', '_blank')
    // The vertical text span carries the writing mode + 180° rotation
    // (reads bottom-to-top); the source applies these to the link.
    const playText = screen.getByText('Play video') as HTMLElement
    expect(playText.className).toMatch(/\[writing-mode:vertical-lr\]/)
    expect(playText.className).toMatch(/-rotate-180/)
    // Black play icon box with 3px radius.
    const iconBox = container.querySelector('a span.rounded-\\[3px\\]') as HTMLElement
    expect(iconBox).not.toBeNull()
    expect(iconBox.className).toMatch(/bg-black/)
    expect(iconBox.querySelector('svg')).not.toBeNull()
  })
})
