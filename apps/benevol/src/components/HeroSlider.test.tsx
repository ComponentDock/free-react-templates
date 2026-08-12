import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'
import { HERO_HEADLINE_1, HERO_HEADLINE_2, HERO_SLIDES } from '../data'

describe('HeroSlider', () => {
  it('renders the first slide with the headline overlay and controls', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('img', { name: HERO_SLIDES[0]!.alt })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: HERO_HEADLINE_1 })).toBeInTheDocument()
    expect(screen.getByText(HERO_HEADLINE_2)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })

  it('advances to the second slide and wraps back on next', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('img', { name: HERO_SLIDES[1]!.alt })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('img', { name: HERO_SLIDES[0]!.alt })).toBeInTheDocument()
  })

  it('wraps to the last slide on previous from the first', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('img', { name: HERO_SLIDES[1]!.alt })).toBeInTheDocument()
  })

  it('jumps to a slide via the dot controls', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByRole('img', { name: HERO_SLIDES[1]!.alt })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 1' }))
    expect(screen.getByRole('img', { name: HERO_SLIDES[0]!.alt })).toBeInTheDocument()
  })
})
