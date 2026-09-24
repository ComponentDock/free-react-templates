import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TrendingStories } from './TrendingStories'

describe('TrendingStories', () => {
  it('renders 3 trending story cards', () => {
    render(<TrendingStories />)
    expect(screen.getByText(/Mother Saves Her Daughter/)).toBeInTheDocument()
    expect(screen.getByText(/Man Rescued Injured Bird/)).toBeInTheDocument()
    expect(screen.getByText(/76-year-old Grandmother/)).toBeInTheDocument()
  })

  it('renders timestamps', () => {
    render(<TrendingStories />)
    const times = screen.getAllByText(/Days Ago/)
    expect(times.length).toBeGreaterThanOrEqual(2)
  })

  it('renders images with alt text', () => {
    render(<TrendingStories />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt')
    })
  })
})
