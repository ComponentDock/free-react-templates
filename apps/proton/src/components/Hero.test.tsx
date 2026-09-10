import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtext and CTA', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Design a better website/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/We craft clean, professional websites/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Free Download/i })).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })

  it('has a background image via inline style', () => {
    render(<Hero />)
    const section = document.querySelector('section')!
    expect(section).toBeInTheDocument()
    expect(section.getAttribute('style')).toContain('picsum.photos')
  })
})
