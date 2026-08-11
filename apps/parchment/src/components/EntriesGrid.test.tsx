import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EntriesGrid } from './EntriesGrid'
import { entries, entriesLabel, paginationLabel } from '../data'

describe('EntriesGrid', () => {
  it('renders all twelve entry cards plus pagination', () => {
    const { container } = render(<EntriesGrid />)

    expect(screen.getByRole('region', { name: entriesLabel })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(12)
    expect(container.querySelectorAll('img')).toHaveLength(12)

    for (const entry of entries) {
      expect(screen.getByRole('heading', { level: 2, name: entry.title })).toBeInTheDocument()
      // Several entries share a date — assert presence, not uniqueness.
      expect(screen.getAllByText(entry.date).length).toBeGreaterThan(0)
    }

    expect(screen.getByRole('navigation', { name: paginationLabel })).toBeInTheDocument()
  })
})
