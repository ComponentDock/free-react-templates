import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TrendingPosts } from './TrendingPosts'

describe('TrendingPosts', () => {
  it('renders the trending posts and recent articles sections', () => {
    render(<TrendingPosts />)

    expect(screen.getByRole('heading', { level: 2, name: /trending posts/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /recent articles/i })).toBeInTheDocument()

    expect(
      screen.getByText('Economic Report Shows Strongest Growth in a Decade'),
    ).toBeInTheDocument()
    expect(screen.getByText('The Rise of Sustainable Fashion in Urban Centers')).toBeInTheDocument()
    expect(
      screen.getByText('Olympic Committee Confirms New Host City for 2032'),
    ).toBeInTheDocument()
    expect(screen.getByText('Startup Funding Reaches Record Levels in Q4')).toBeInTheDocument()

    expect(
      screen.getByText('Spring Collections Preview: Bold Colors Dominate Runways'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Grammy Nominations Surprise with Indie Artist Picks'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('City Council Approves Major Infrastructure Investment'),
    ).toBeInTheDocument()
  })

  it('renders all article cards as links', () => {
    render(<TrendingPosts />)

    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(7)
  })
})
