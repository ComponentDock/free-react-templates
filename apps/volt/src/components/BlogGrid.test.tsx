import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogGrid } from './BlogGrid'
import { featured, verticalPosts, widePosts } from '../data'

describe('BlogGrid', () => {
  it('composes the featured card, wide pairs and three-up vertical rows', () => {
    render(<BlogGrid />)

    expect(screen.getByRole('heading', { name: featured.post.title })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
    for (const post of widePosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    }
    for (const post of verticalPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    }
  })

  it('right-aligns the second wide card and reverses one vertical card', () => {
    render(<BlogGrid />)

    const firstWide = screen.getByText(widePosts[0]!.title).closest('article')!
    const secondWide = screen.getByText(widePosts[1]!.title).closest('article')!
    expect(firstWide).not.toHaveClass('md:flex-row-reverse')
    expect(secondWide).toHaveClass('md:flex-row-reverse')

    const reversedVertical = screen.getByText(verticalPosts[4]!.title).closest('article')!
    expect(reversedVertical).toHaveClass('flex-col-reverse')
    expect(screen.getByText(verticalPosts[0]!.title).closest('article')).not.toHaveClass(
      'flex-col-reverse',
    )
  })
})
