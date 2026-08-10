import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EditorsPick } from './EditorsPick'
import { editorsPickMain, editorsPickRows } from '../data'

describe('EditorsPick', () => {
  it('renders the heading, the large post card and the small post rows', () => {
    const { container } = render(<EditorsPick />)

    expect(screen.getByRole('heading', { level: 2, name: "Editor's Pick" })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: editorsPickMain.title })).toBeInTheDocument()
    expect(screen.getByText(editorsPickMain.excerpt)).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(1)

    for (const post of editorsPickRows) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: post.author })).toBeInTheDocument()
    }
  })
})
