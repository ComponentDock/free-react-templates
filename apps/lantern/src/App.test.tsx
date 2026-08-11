import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { skipLabel, siteName, trendingTitle, topStoriesTitle } from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Lantern — Blog Template')
  })

  it('renders a skip link as the first interactive element', () => {
    render(<App />)
    const skip = screen.getByRole('link', { name: skipLabel })
    expect(skip).toHaveAttribute('href', '#main')
  })

  it('composes the header in the banner, sections in main, and the footer in contentinfo', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: siteName })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { name: trendingTitle })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: topStoriesTitle })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('link', { name: siteName })).toBeInTheDocument()
  })

  it('renders the featured hero, the article section and the newsletter form', () => {
    render(<App />)
    expect(screen.getByRole('region', { name: 'Featured post' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Latest articles' })).toBeInTheDocument()
    expect(screen.getByRole('complementary', { name: 'Sidebar' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })
})
