import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PostRow } from './PostRow'
import { latestNewsRows } from '../data'

describe('PostRow', () => {
  it('renders the image, tag, title, meta and excerpt for a post row', () => {
    const post = latestNewsRows[0]!
    render(<PostRow post={post} />)

    expect(screen.getByRole('heading', { level: 4, name: post.title })).toBeInTheDocument()
    expect(screen.getByText(post.tag)).toBeInTheDocument()
    expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    expect(screen.getByText(post.meta.author)).toBeInTheDocument()
    expect(screen.getByText(`${post.meta.comments} Comments`)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: post.title })).toBeInTheDocument()
  })
})
