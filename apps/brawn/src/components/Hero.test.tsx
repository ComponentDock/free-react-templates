import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HERO, VIDEO_URL } from '../content'
import { Hero } from './Hero'

describe('Hero', () => {
  it('is one 100vh band with the photo under a 40% black wash', () => {
    const { container } = render(<Hero />)
    const band = container.querySelector('section') as HTMLElement
    expect(band.style.backgroundImage).toContain(HERO.image)
    expect(band.className).toContain('h-screen')
    expect(band.className).toContain('min-h-[700px]')
    expect(band.className).toContain('bg-cover')
    const wash = band.querySelector('div[aria-hidden="true"]') as HTMLElement
    expect(wash.className).toContain('bg-black/40')
    expect(wash.className).toContain('absolute')
  })

  it('carries the only h1, uppercase at 80px from md', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(HERO.headline)
    expect(heading.className).toContain('uppercase')
    expect(heading.className).toContain('md:text-[80px]')
    expect(heading.className).toContain('text-[40px]')
  })

  it('links the 60px play disc to the video in a new tab', () => {
    render(<Hero />)
    const disc = screen.getByRole('link', { name: HERO.playLabel })
    expect(disc).toHaveAttribute('href', VIDEO_URL)
    expect(disc).toHaveAttribute('target', '_blank')
    expect(disc).toHaveAttribute('rel', 'noopener noreferrer')
    expect(disc.className).toContain('h-[60px]')
    expect(disc.className).toContain('hover:h-20')
    expect(disc.className).toContain('rounded-full')
    expect(screen.getByText(HERO.playCaption)).toBeInTheDocument()
  })
})
