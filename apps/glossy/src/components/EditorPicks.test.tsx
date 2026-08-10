import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EditorPicks } from './EditorPicks'
import { editorsPickFeatured, editorsPickRows, editorsPickTitle } from '../data'

describe('EditorPicks', () => {
  it('renders the heading, featured card and two horizontal rows', () => {
    render(<EditorPicks />)
    expect(screen.getByRole('region', { name: editorsPickTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: editorsPickTitle })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 4, name: editorsPickFeatured.title }),
    ).toBeInTheDocument()
    for (const post of editorsPickRows) {
      expect(screen.getByRole('heading', { level: 4, name: post.title })).toBeInTheDocument()
    }
  })

  it('renders the full-width ad banner placeholder', () => {
    render(<EditorPicks />)
    expect(screen.getByRole('link', { name: 'Advertisement' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Advertisement' })).toHaveAttribute(
      'src',
      expect.stringContaining('glossy-ad'),
    )
  })
})
