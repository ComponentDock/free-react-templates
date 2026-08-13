import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the headline, paragraph and CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: hero.heading })).toBeInTheDocument()
    expect(screen.getByText(hero.paragraph)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: hero.cta })).toBeInTheDocument()
  })

  it('anchors the CTA to the services section with the flat red style', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: hero.cta })
    expect(cta).toHaveAttribute('href', '#services')
    expect(cta).toHaveClass('bg-brand')
  })

  it('uses the background photo from the data', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('#home') as HTMLElement
    expect(section.style.backgroundImage).toContain(hero.image)
  })

  it('renders a dark overlay over the photo', () => {
    const { container } = render(<Hero />)
    const overlay = container.querySelector('#home .bg-overlay') as HTMLElement
    expect(overlay).toBeInTheDocument()
  })
})
