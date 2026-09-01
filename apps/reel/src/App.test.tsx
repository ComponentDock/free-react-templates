import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Reel — Interactive Carousel Showcase')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Beautiful Carousel Showcase',
    )
  })

  it('includes the carousel, features, and newsletter sections', () => {
    render(<App />)

    expect(screen.getAllByText('Carousel Showcase').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Powerful Carousel Features')).toBeInTheDocument()
    expect(screen.getByText('Stay Updated')).toBeInTheDocument()
  })
})
