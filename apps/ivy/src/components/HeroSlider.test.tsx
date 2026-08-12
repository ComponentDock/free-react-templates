import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'
import { HERO_SLIDES } from '../data'

describe('HeroSlider', () => {
  it('renders the first slide with headline, copy, button and pager', () => {
    render(<HeroSlider />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Education Needs Complete Solution' }),
    ).toBeInTheDocument()
    expect(screen.getByText(HERO_SLIDES[0]!.copy)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByText('1 / 2')).toBeInTheDocument()
  })

  it('advances to the second slide with the next control', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'University, College School Education' }),
    ).toBeInTheDocument()
    expect(screen.getByText('2 / 2')).toBeInTheDocument()
  })

  it('wraps from the first slide to the last with the previous control', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: HERO_SLIDES[HERO_SLIDES.length - 1]!.headline,
      }),
    ).toBeInTheDocument()
  })

  it('cycles back to the first slide after the last', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('1 / 2')).toBeInTheDocument()
  })
})
