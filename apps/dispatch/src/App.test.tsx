import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Dispatch — Magazine & Lifestyle Blog')
  })

  it('composes the magazine layout in the original section order', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "Don't Miss" })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "What's Trending" })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Most Popular Videos' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest Articles' })).toBeInTheDocument()
    expect(screen.getByRole('complementary')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Top Stories' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Load More' })).toBeInTheDocument()
  })
})
