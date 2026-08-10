import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HeroSlider } from './HeroSlider'
import { heroSlides, nextSlideLabel, previousSlideLabel } from '../data'

describe('HeroSlider', () => {
  it('shows the first slide and cycles with the controls', () => {
    render(<HeroSlider />)

    expect(screen.getByRole('heading', { name: heroSlides[0]!.title })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(screen.getByRole('heading', { name: heroSlides[1]!.title })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: previousSlideLabel }))
    expect(screen.getByRole('heading', { name: heroSlides[0]!.title })).toBeInTheDocument()
  })

  it('wraps around from the last slide back to the first', () => {
    render(<HeroSlider />)

    heroSlides.forEach(() => {
      fireEvent.click(screen.getByRole('button', { name: nextSlideLabel }))
    })
    expect(screen.getByRole('heading', { name: heroSlides[0]!.title })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: previousSlideLabel }))
    expect(
      screen.getByRole('heading', { name: heroSlides[heroSlides.length - 1]!.title }),
    ).toBeInTheDocument()
  })
})
