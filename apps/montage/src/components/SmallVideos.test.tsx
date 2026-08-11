import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { SmallVideos } from './SmallVideos'
import { smallColumns } from '../data'

describe('SmallVideos', () => {
  it('renders the three category columns with headings', () => {
    render(<SmallVideos />)
    const section = screen.getByRole('region', { name: 'Small videos' })
    for (const column of smallColumns) {
      expect(within(section).getByRole('heading', { name: column.heading })).toBeInTheDocument()
    }
  })

  it('renders each column featured card and horizontal rows with meta', () => {
    render(<SmallVideos />)
    const section = screen.getByRole('region', { name: 'Small videos' })
    for (const column of smallColumns) {
      const columnEl = within(section)
        .getByRole('heading', {
          name: column.heading,
        })
        .closest('div')
      expect(columnEl).not.toBeNull()
      expect(
        within(columnEl as HTMLElement).getByRole('heading', { name: column.featured.title }),
      ).toBeInTheDocument()
      for (const row of column.rows) {
        expect(
          within(columnEl as HTMLElement).getByRole('heading', { name: row.title }),
        ).toBeInTheDocument()
      }
    }
    expect(
      within(section).getAllByText(smallColumns[0]!.rows[0]!.meta.comments).length,
    ).toBeGreaterThan(0)
  })
})
