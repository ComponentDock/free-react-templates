import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { skipLabel } from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Sonder — Lifestyle Blog Template')
  })

  it('renders a skip link as the first interactive element', () => {
    render(<App />)
    const skip = screen.getByRole('link', { name: skipLabel })
    expect(skip).toHaveAttribute('href', '#main')
  })

  it('composes the navbar in the banner, sections in main, and the footer in contentinfo', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: 'Sonder' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { name: 'Popular Posts' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Tags' })).toBeInTheDocument()
    expect(within(main).getAllByRole('article').length).toBeGreaterThanOrEqual(10)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the featured block, the blog grid and the newsletter form', () => {
    render(<App />)
    expect(screen.getByRole('region', { name: 'Featured posts' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Blog posts' })).toBeInTheDocument()
    expect(
      screen.getByRole('region', { name: 'Popular posts and tags' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })
})
