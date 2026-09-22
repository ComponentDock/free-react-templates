import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading and CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Caring for Your Health/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Learn More/i })).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<Hero />)
    const section = screen
      .getByRole('heading', { name: /Caring for Your Health/i })
      .closest('section')!
    expect(section.style.backgroundImage).toContain('vitala-hero')
  })
})
