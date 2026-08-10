import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PostEntry } from './PostEntry'
import { highlightHorizontal, highlightVertical } from '../data'

describe('PostEntry', () => {
  it('renders a vertical post entry (image on top, category, title, meta)', () => {
    render(<PostEntry post={highlightVertical[0]!} />)
    const post = highlightVertical[0]!
    expect(screen.getByRole('link', { name: post.category })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
    expect(screen.getByText(post.meta)).toBeInTheDocument()
  })

  it('renders a horizontal post entry (image left, text right)', () => {
    render(<PostEntry post={highlightHorizontal[0]!} variant="horizontal" />)
    const post = highlightHorizontal[0]!
    expect(screen.getByRole('link', { name: post.category })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
    expect(screen.getByText(post.meta)).toBeInTheDocument()
  })
})
