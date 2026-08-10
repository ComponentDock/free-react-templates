import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogList } from './BlogList'
import {
  blogPosts,
  bylinePrefix,
  commentsSuffix,
  continueReadingLabel,
  newerLabel,
  olderLabel,
  viewsSuffix,
} from '../data'

describe('BlogList', () => {
  it('renders the five posts with meta and continue-reading links', () => {
    render(<BlogList />)

    blogPosts.forEach((post) => {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    })
    expect(
      screen.getAllByText(`${bylinePrefix} ${blogPosts[0]!.author}`, { exact: false }),
    ).toHaveLength(blogPosts.length)
    expect(screen.getAllByText(`${blogPosts[0]!.views} ${viewsSuffix}`)).toHaveLength(
      blogPosts.length,
    )
    expect(screen.getAllByText(`${blogPosts[0]!.comments} ${commentsSuffix}`)).toHaveLength(
      blogPosts.length,
    )
    expect(screen.getAllByRole('link', { name: continueReadingLabel })).toHaveLength(
      blogPosts.length,
    )
  })

  it('shows Newer and Older pagination', () => {
    render(<BlogList />)

    expect(screen.getByRole('link', { name: newerLabel })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: olderLabel })).toBeInTheDocument()
  })
})
