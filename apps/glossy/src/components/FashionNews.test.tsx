import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FashionNews } from './FashionNews'
import { fashionNewsTitle, fashionPosts, latestPosts } from '../data'

describe('FashionNews', () => {
  it('renders the three-column card grid', () => {
    render(<FashionNews />)
    expect(screen.getByRole('region', { name: fashionNewsTitle })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3, name: fashionNewsTitle }).length).toBe(2)
    for (const post of fashionPosts) {
      expect(screen.getByRole('heading', { level: 4, name: post.title })).toBeInTheDocument()
    }
  })

  it('renders the two-column latest news grid', () => {
    render(<FashionNews />)
    for (const post of latestPosts) {
      expect(screen.getByRole('heading', { level: 4, name: post.title })).toBeInTheDocument()
    }
  })
})
