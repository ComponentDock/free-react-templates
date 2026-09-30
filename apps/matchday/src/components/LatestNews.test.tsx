import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('renders the section heading on the light band', () => {
    render(<LatestNews />)
    expect(screen.getByRole('heading', { name: 'Latest news' })).toBeInTheDocument()
  })

  it('renders three news cards with date badges, titles and excerpts', () => {
    render(<LatestNews />)
    expect(
      screen.getByText('Ravens crowned champions after a season to remember'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Academy graduates sign first professional contracts'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Community programme reaches ten thousand children'),
    ).toBeInTheDocument()
    expect(screen.getAllByText('25').length).toBeGreaterThan(0)
    expect(screen.getByText('Aug')).toBeInTheDocument()
    expect(screen.getByText(/dominant campaign/i)).toBeInTheDocument()
  })

  it('card photos use placeholder images with empty alt text', () => {
    render(<LatestNews />)
    expect(screen.getAllByAltText('')[0]).toHaveAttribute(
      'src',
      expect.stringContaining('matchday-news-1'),
    )
  })
})
