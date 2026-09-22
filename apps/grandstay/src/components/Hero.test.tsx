import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { HERO } from '../data'
import { describe, expect, it } from 'vitest'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO.heading)
  })

  it('has background image', () => {
    render(<Hero />)
    const section = document.querySelector('section#home')
    expect(section).not.toBeNull()
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('picsum') })
  })

  it('renders three thumbnail buttons', () => {
    render(<Hero />)
    for (const thumb of HERO.thumbnails) {
      expect(screen.getByRole('button', { name: thumb.label })).toBeInTheDocument()
    }
  })

  it('has previous and next navigation buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('displays overlay on hero', () => {
    render(<Hero />)
    const section = document.querySelector('section#home')
    const overlay = section!.children[0]
    expect(overlay).toHaveAttribute('aria-hidden', 'true')
  })
})
