import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestTrending } from './LatestTrending'

describe('LatestTrending', () => {
  it('renders CTA heading, subtext, and button', () => {
    render(<LatestTrending />)

    expect(screen.getByText(/Thousands of recipes/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(
      /Discover latest trending/,
    )
    expect(screen.getByRole('link', { name: 'View all Recipes' })).toHaveAttribute(
      'href',
      '#recipes',
    )
  })
})
