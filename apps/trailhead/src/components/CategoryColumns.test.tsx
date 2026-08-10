import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CategoryColumns } from './CategoryColumns'
import { categoryColumns, viewAllLabel } from '../data'

describe('CategoryColumns', () => {
  it('renders four category columns with headings, view-all buttons and posts', () => {
    render(<CategoryColumns />)

    for (const column of categoryColumns) {
      expect(screen.getByRole('heading', { name: column.heading })).toBeInTheDocument()
      expect(
        screen.getByRole('link', { name: new RegExp(column.featured.title) }),
      ).toBeInTheDocument()
      for (const post of column.small) {
        expect(screen.getByRole('link', { name: new RegExp(post.title) })).toBeInTheDocument()
      }
    }
    // View All pills appear once per column
    expect(screen.getAllByRole('link', { name: viewAllLabel })).toHaveLength(categoryColumns.length)
  })
})
