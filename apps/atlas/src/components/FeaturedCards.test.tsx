import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedCards } from './FeaturedCards'
import { featuredCards } from '../data'

describe('FeaturedCards', () => {
  it('renders three cards with chip, headline, and meta', () => {
    render(<FeaturedCards />)

    featuredCards.forEach((post) => {
      expect(screen.getByRole('img', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.category)).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(new RegExp(`${post.author} on ${post.date}`))).toBeInTheDocument()
    })
  })
})
