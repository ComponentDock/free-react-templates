import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero section with heading, subtitle, and CTA', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { name: /Whenever we bake, bake with our heart/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Love with baking items')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Check Our Menu' })).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<Hero />)
    const section = screen.getByRole('heading', { name: /Whenever we bake/i }).closest('section')!
    expect(section.style.backgroundImage).toContain('picsum.photos')
  })

  it('has a dark overlay', () => {
    render(<Hero />)
    const overlay = document.querySelector('.bg-navy\\/50')
    expect(overlay).toBeInTheDocument()
  })
})
