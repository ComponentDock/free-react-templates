import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RelevantStories } from './RelevantStories'
import { relevantStoriesRows, relevantStoriesTitle } from '../data'

describe('RelevantStories', () => {
  it('shows the section title and one row per relevant-story entry', () => {
    render(<RelevantStories />)

    expect(screen.getByRole('heading', { name: relevantStoriesTitle })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(relevantStoriesRows.length)
    for (const row of relevantStoriesRows) {
      expect(screen.getAllByRole('heading', { level: 4, name: row.title }).length).toBeGreaterThan(
        0,
      )
      expect(screen.getAllByText(row.excerpt).length).toBeGreaterThan(0)
    }
  })
})
