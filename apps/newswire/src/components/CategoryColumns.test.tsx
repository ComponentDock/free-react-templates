import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryColumns } from './CategoryColumns'
import { categoryColumns } from '../data'

describe('CategoryColumns', () => {
  it('renders Politics and Business columns with their post entries', () => {
    const { container } = render(<CategoryColumns />)

    for (const column of categoryColumns) {
      expect(screen.getByRole('heading', { level: 2, name: column.heading })).toBeInTheDocument()
      for (const post of column.posts) {
        expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
        // Authors repeat across columns (e.g. Elena Ruiz in Politics + Business)
        expect(screen.getAllByRole('link', { name: post.author }).length).toBeGreaterThan(0)
      }
    }

    const totalPosts = categoryColumns.reduce((sum, column) => sum + column.posts.length, 0)
    expect(container.querySelectorAll('img')).toHaveLength(totalPosts)
  })
})
