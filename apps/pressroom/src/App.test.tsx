import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Pressroom — News & Magazine')
  })

  it('composes the header, hero, news sections and footer', () => {
    render(<App />)
    // Header trio (brand appears in the mid bar and the footer)
    expect(screen.getAllByText('Pressroom').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    // Hero headline (first featured story)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    // News sections
    expect(screen.getByRole('heading', { name: 'Whats New' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Most Recent' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Trending News' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest Video - 2020' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Old Spondon News - 2020' })).toBeInTheDocument()
    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders both banner ads', () => {
    render(<App />)
    expect(screen.getAllByRole('img', { name: 'Advertisement' }).length).toBeGreaterThanOrEqual(2)
  })
})
