import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the first slide heading', () => {
    render(<HeroSlider />)
    expect(screen.getByText('December Camp Meeting')).toBeInTheDocument()
  })

  it('renders slide captions', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
    expect(screen.getByText('Solemn Assembly')).toBeInTheDocument()
  })

  it('renders call-to-action buttons', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Register Now')).toBeInTheDocument()
    expect(screen.getByText('Join With Us')).toBeInTheDocument()
  })
})
