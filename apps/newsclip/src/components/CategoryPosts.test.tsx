import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryPosts } from './CategoryPosts'
import {
  categoryLeftFeatured,
  categoryLeftText,
  categoryMiddlePosts,
  categoryRightFeatured,
  categoryRightText,
} from '../data'

describe('CategoryPosts', () => {
  it('renders the left featured post', () => {
    render(<CategoryPosts />)
    expect(screen.getByText(categoryLeftFeatured.title)).toBeInTheDocument()
  })

  it('renders the left text-only posts', () => {
    render(<CategoryPosts />)
    for (const post of categoryLeftText) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    }
  })

  it('renders the middle 2x2 grid posts', () => {
    render(<CategoryPosts />)
    for (const post of categoryMiddlePosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    }
  })

  it('renders the right featured post', () => {
    render(<CategoryPosts />)
    expect(screen.getByText(categoryRightFeatured.title)).toBeInTheDocument()
  })

  it('renders the right text-only posts', () => {
    render(<CategoryPosts />)
    for (const post of categoryRightText) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    }
  })
})
