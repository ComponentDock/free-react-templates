import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MostPopular } from './MostPopular'
import { mostPopularRows, mostPopularTitle } from '../data'

describe('MostPopular', () => {
  it('shows the widget title and one row per most-popular entry', () => {
    render(<MostPopular />)

    expect(screen.getByRole('heading', { name: mostPopularTitle })).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(mostPopularRows.length)
    for (const post of mostPopularRows) {
      expect(screen.getAllByRole('heading', { level: 6, name: post.title }).length).toBeGreaterThan(
        0,
      )
    }
  })
})
