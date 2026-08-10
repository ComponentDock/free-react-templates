import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import { newsTitle, tickerLabel, videoTitle } from './data'

describe('App', () => {
  it('composes every section on a single page with the document title', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: newsTitle })).toBeInTheDocument()
    // The featured video title is the level-2 heading (hero titles are h3).
    expect(screen.getByRole('heading', { level: 2, name: videoTitle })).toBeInTheDocument()
    expect(screen.getByText(tickerLabel)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /Traffic Problems in Time Square/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Subscribe to our newsletter/i }),
    ).toBeInTheDocument()

    expect(document.title).toBe('Bulletin — News Magazine Template')
  })
})
