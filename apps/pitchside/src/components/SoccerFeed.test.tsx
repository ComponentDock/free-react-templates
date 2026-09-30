import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { soccerFeed } from '../data'
import { SoccerFeed } from './SoccerFeed'

describe('SoccerFeed', () => {
  it('renders the section title and four photo cards', () => {
    render(<SoccerFeed />)
    expect(screen.getByRole('heading', { level: 3, name: 'Soccer Feed' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(soccerFeed.length)
  })

  it('shows red tags, titles and pipe-separated meta on each card', () => {
    render(<SoccerFeed />)
    expect(screen.getAllByText('Sport')).toHaveLength(soccerFeed.length)
    for (const item of soccerFeed) {
      expect(screen.getByText(item.title)).toBeInTheDocument()
      expect(screen.getByText(item.date)).toBeInTheDocument()
    }
    expect(screen.getAllByText('|')).toHaveLength(soccerFeed.length)
  })
})
