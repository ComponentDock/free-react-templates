import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeaturedCarousel } from './FeaturedCarousel'
import { featuredIndicatorLabel, featuredPosts } from '../data'

describe('FeaturedCarousel', () => {
  it('shows the first featured post with five numbered indicators', () => {
    render(<FeaturedCarousel />)

    expect(screen.getByRole('heading', { name: featuredPosts[0]!.title })).toBeInTheDocument()
    featuredPosts.forEach((_post, i) => {
      const indicator = screen.getByRole('button', { name: featuredIndicatorLabel(i + 1) })
      expect(indicator).toBeInTheDocument()
      expect(indicator).toHaveTextContent(String(i + 1).padStart(2, '0'))
    })
    expect(screen.getByRole('button', { name: featuredIndicatorLabel(1) })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })

  it('switches the featured post when an indicator is selected', () => {
    render(<FeaturedCarousel />)

    fireEvent.click(screen.getByRole('button', { name: featuredIndicatorLabel(3) }))
    expect(screen.getByRole('heading', { name: featuredPosts[2]!.title })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: featuredIndicatorLabel(3) })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })
})
