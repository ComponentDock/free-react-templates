import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestNews } from './LatestNews'
import { latestNewsRows, latestNewsTitle } from '../data'

describe('LatestNews', () => {
  it('shows the section title and one row per latest-news entry', () => {
    render(<LatestNews />)

    expect(screen.getByRole('heading', { name: latestNewsTitle })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(latestNewsRows.length)
    for (const row of latestNewsRows) {
      expect(screen.getAllByRole('heading', { level: 4, name: row.title }).length).toBeGreaterThan(
        0,
      )
      expect(screen.getByText(row.tag)).toBeInTheDocument()
      expect(screen.getAllByText(row.excerpt).length).toBeGreaterThan(0)
    }
  })
})
