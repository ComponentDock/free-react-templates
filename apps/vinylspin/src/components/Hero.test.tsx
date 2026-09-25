import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('New single release')).toBeInTheDocument()
  })

  it('renders main title', () => {
    render(<Hero />)
    expect(screen.getByText('Love is all around')).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Listen on Soundcloud')).toBeInTheDocument()
  })

  it('has a background image style', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section?.getAttribute('style')).toContain('vinylspin-hero')
  })
})
