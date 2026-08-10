import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HotPosts } from './HotPosts'
import { hotFeature, hotStacked } from '../data'

describe('HotPosts', () => {
  it('renders the featured post and both stacked posts', () => {
    render(<HotPosts />)
    const section = screen.getByRole('region', { name: /hot posts/i })
    expect(section).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: hotFeature.title })).toBeInTheDocument()
    for (const post of hotStacked) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(hotFeature.category).length).toBeGreaterThan(0)
  })
})
