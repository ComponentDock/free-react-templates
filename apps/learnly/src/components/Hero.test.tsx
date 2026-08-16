import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders a full-viewport section with the background photo', () => {
    const { container } = render(<Hero />)

    const section = container.querySelector('section')!
    expect(section.className).toContain('min-h-screen')
    expect(section.style.backgroundImage).toContain(hero.image)
  })

  it('renders the eyebrow, headline and copy', () => {
    render(<Hero />)

    expect(screen.getByText(hero.eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: hero.headline })).toBeInTheDocument()
    expect(screen.getByText(hero.copy)).toBeInTheDocument()
  })

  it('renders both call-to-action buttons', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: new RegExp(hero.primaryCta) })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: new RegExp(hero.secondaryCta) })).toBeInTheDocument()
  })
})
