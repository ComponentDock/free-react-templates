import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedGrid } from './FeaturedGrid'
import { featuredCenter, featuredLarge, featuredStacked } from '../data'

describe('FeaturedGrid', () => {
  it('renders the large, centered and two stacked featured cards', () => {
    render(<FeaturedGrid />)
    expect(screen.getByRole('region', { name: 'Featured posts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: featuredLarge.title })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 4, name: featuredCenter.title }),
    ).toBeInTheDocument()
    for (const post of featuredStacked) {
      expect(screen.getByRole('heading', { level: 4, name: post.title })).toBeInTheDocument()
    }
  })
})
