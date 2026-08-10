import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EditorsPick } from './EditorsPick'
import { editorsPickFeature, editorsPickMini, editorsPickTitle } from '../data'

describe('EditorsPick', () => {
  it('shows the feature post and the mini post rows', () => {
    render(<EditorsPick />)

    expect(screen.getByRole('heading', { name: editorsPickTitle })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 4, name: editorsPickFeature.title }),
    ).toBeInTheDocument()
    for (const post of editorsPickMini) {
      expect(screen.getByRole('heading', { level: 6, name: post.title })).toBeInTheDocument()
      expect(
        screen.getAllByText(`${post.meta.date} / ${post.meta.comments} Comments`).length,
      ).toBeGreaterThan(0)
    }
  })
})
