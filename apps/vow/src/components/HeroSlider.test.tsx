import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the hero heading and subtitle', () => {
    render(<HeroSlider />)
    expect(screen.getByText('New Collection')).toBeInTheDocument()
    expect(screen.getByText('Promo Prices')).toBeInTheDocument()
  })

  it('renders slide dots', () => {
    render(<HeroSlider />)
    expect(screen.getByText('01.')).toBeInTheDocument()
    expect(screen.getByText('02.')).toBeInTheDocument()
    expect(screen.getByText('03.')).toBeInTheDocument()
  })

  it('renders next slide button', () => {
    render(<HeroSlider />)
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument()
  })
})
