import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeaturedStories } from './FeaturedStories'

describe('FeaturedStories', () => {
  it('renders heading', () => {
    render(<FeaturedStories />)
    expect(screen.getByText('Featured Stories')).toBeInTheDocument()
  })

  it('renders all 3 stories', () => {
    render(<FeaturedStories />)
    expect(screen.getByText('"Being loved has taught me how to love"')).toBeInTheDocument()
    expect(screen.getByText('Becoming a perfect parent out of imperfect')).toBeInTheDocument()
    expect(screen.getByText('Home sweet home')).toBeInTheDocument()
  })

  it('renders dates', () => {
    render(<FeaturedStories />)
    const dates = screen.getAllByText('January 31, 2024')
    expect(dates).toHaveLength(3)
  })

  it('story cards have images', () => {
    render(<FeaturedStories />)
    expect(screen.getByAltText('"Being loved has taught me how to love"')).toBeInTheDocument()
  })
})
