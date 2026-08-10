import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { footerCredit, heroSlides, instagramHeading, latestPosts } from './data'

describe('App', () => {
  it('composes every section and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Crumb — Food & Lifestyle Blog')
    // The first hero slide title also appears as a blog post and a latest post.
    expect(screen.getAllByRole('heading', { name: heroSlides[0]!.title })).toHaveLength(3)
    expect(
      screen.getByRole('heading', { name: 'Fried Pizzas on parchment paper with basil.' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: latestPosts[0]!.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: instagramHeading })).toBeInTheDocument()
    expect(screen.getByText(footerCredit, { exact: false })).toBeInTheDocument()
  })
})
