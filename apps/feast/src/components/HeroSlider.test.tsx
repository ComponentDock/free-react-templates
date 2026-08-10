import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HeroSlider } from './HeroSlider'
import { nextSlideLabel, previousSlideLabel } from '../data'

describe('HeroSlider', () => {
  it('renders the sticker headline on the first slide', () => {
    const { container } = render(<HeroSlider />)

    expect(screen.getByRole('heading', { name: 'Healthy Recipes' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'from the best chefs' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'for all the foodies' })).toBeInTheDocument()

    const slides = container.querySelectorAll('img')
    expect(slides).toHaveLength(2)
    expect(slides[0]!.getAttribute('src')).toContain('feast-hero-1')
    expect(slides[0]!.className).toContain('opacity-100')
    expect(slides[1]!.className).toContain('opacity-0')
  })

  it('advances and wraps between the two slides with the arrow buttons', () => {
    const { container } = render(<HeroSlider />)
    const next = screen.getByRole('button', { name: nextSlideLabel })
    const prev = screen.getByRole('button', { name: previousSlideLabel })
    const slides = container.querySelectorAll('img')

    fireEvent.click(next)
    expect(slides[1]!.className).toContain('opacity-100')

    fireEvent.click(next)
    expect(slides[0]!.className).toContain('opacity-100')

    fireEvent.click(prev)
    expect(slides[1]!.className).toContain('opacity-100')

    fireEvent.click(prev)
    expect(slides[0]!.className).toContain('opacity-100')
  })
})
