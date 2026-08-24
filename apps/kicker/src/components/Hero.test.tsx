import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the feature story headline', () => {
    render(<Hero />)
    expect(
      screen.getByText("The world's first fitness influencer was a Victorian strongman"),
    ).toBeInTheDocument()
  })

  it('renders the feature story byline', () => {
    render(<Hero />)
    expect(screen.getByText('by Pete Sariya')).toBeInTheDocument()
  })

  it('renders the feature story kicker tag', () => {
    render(<Hero />)
    const kickers = screen.getAllByText('Technology')
    expect(kickers.length).toBeGreaterThanOrEqual(1)
  })

  it('renders three rail stories', () => {
    render(<Hero />)
    expect(screen.getByText('Needs to Rename the James Webb Space Telescope')).toBeInTheDocument()
    expect(
      screen.getByText('These striking photos capture the future of human flight'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Exploring the origins of punk across America with Kid Karate'),
    ).toBeInTheDocument()
  })

  it('renders images with proper alt text', () => {
    render(<Hero />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })

  it('feature image is eagerly loaded', () => {
    render(<Hero />)
    const images = screen.getAllByRole('img')
    const heroImage = images.find((img) => img.getAttribute('alt')?.includes('fitness influencer'))
    expect(heroImage).toHaveAttribute('loading', 'eager')
  })
})
