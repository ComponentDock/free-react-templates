import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HeroSlider } from './HeroSlider'
import { heroSlides, nextSlideLabel, previousSlideLabel } from '../data'

describe('HeroSlider', () => {
  it('shows the first slide with date block, category, title and byline', () => {
    render(<HeroSlider />)

    const first = heroSlides[0]!
    expect(screen.getByRole('heading', { name: first.title })).toBeInTheDocument()
    expect(screen.getByText(first.day)).toBeInTheDocument()
    expect(screen.getByText(first.month)).toBeInTheDocument()
    expect(screen.getByText(first.category)).toBeInTheDocument()
    expect(screen.getByText(first.byline)).toBeInTheDocument()
  })

  it('cycles forward and backward with wrap-around', () => {
    render(<HeroSlider />)

    fireEvent.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(screen.getByRole('heading', { name: heroSlides[1]!.title })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: previousSlideLabel }))
    expect(screen.getByRole('heading', { name: heroSlides[0]!.title })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: previousSlideLabel }))
    expect(
      screen.getByRole('heading', { name: heroSlides[heroSlides.length - 1]!.title }),
    ).toBeInTheDocument()
  })
})
