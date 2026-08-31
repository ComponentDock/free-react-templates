import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, carousel, and footer and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('SlideSpot — Split-Screen Carousel Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the carousel section heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /featured collection/i })).toBeInTheDocument()
  })

  it('renders the SlideSpot brand name', () => {
    render(<App />)
    expect(screen.getAllByText('SlideSpot').length).toBeGreaterThanOrEqual(1)
  })
})
