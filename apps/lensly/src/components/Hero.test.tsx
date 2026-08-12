import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HERO_IMAGE } from '../data'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the eyebrow, amber serif headline, paragraph, and CTA button', () => {
    render(<Hero />)
    expect(screen.getByText("Hey there! I'm Craig Smith")).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Wedding & Event Photographer/)
    expect(heading.className).toContain('text-brand')
    expect(heading.className).toContain('font-display')

    const paragraph = screen.getByText(/Far far away, behind the word mountains/)
    expect(paragraph.className).toContain('text-white')

    const cta = screen.getByRole('link', { name: 'Contact Me' })
    expect(cta).toHaveAttribute('href', '#contact')
    expect(cta.className).toContain('bg-brand')
  })

  it('renders the full-height photo background with a dark overlay', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section?.className).toContain('min-h-[677px]')
    expect(section?.getAttribute('style')).toContain(HERO_IMAGE)
    expect(section?.querySelector('.bg-black\\/30')).not.toBeNull()
  })
})
