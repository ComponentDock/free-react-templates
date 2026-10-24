import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the single h1, the subline and the outlined CTA', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(hero.title)
    expect(screen.getByText(hero.subline)).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: 'Hire me' })
    expect(cta).toHaveAttribute('href', '#contact')
    expect(cta.className).toContain('border-ink')
  })

  it('sits on the lime band with a neon disc behind the portrait', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('section')?.className).toContain('bg-band')
    const portrait = screen.getByRole('img', { name: 'Portrait of the designer' })
    expect(portrait).toHaveAttribute('src', hero.portrait)
    expect(portrait.getAttribute('src')).toContain('picsum.photos/seed/portray-portrait')
    const disc = container.querySelector('[aria-hidden="true"].rounded-full')
    expect(disc?.className).toContain('bg-neon')
  })
})
