import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'
import { HERO_SLIDES } from '../data'

describe('HeroSlider', () => {
  it('renders the hero section with the home id', () => {
    const { container } = render(<HeroSlider />)
    expect(container.querySelector('#home')).toBeInTheDocument()
  })

  it('displays the kicker text', () => {
    render(<HeroSlider />)
    expect(screen.getByText(HERO_SLIDES[0].kicker)).toBeInTheDocument()
  })

  it('displays the title words', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Burger')).toBeInTheDocument()
    expect(screen.getByText('Bachelor')).toBeInTheDocument()
  })

  it('displays the subtitle', () => {
    render(<HeroSlider />)
    expect(screen.getByText(HERO_SLIDES[0].subtitle)).toBeInTheDocument()
  })

  it('has a background image with the correct seed', () => {
    const { container } = render(<HeroSlider />)
    const bgImg = container.querySelector('img[aria-hidden="true"]')
    expect(bgImg).toHaveAttribute('src', 'https://picsum.photos/seed/griddle-hero/1920/600')
  })
})
