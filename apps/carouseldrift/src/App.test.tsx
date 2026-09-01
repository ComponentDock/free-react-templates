import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('CarouselDrift — Interactive Carousel Showcase')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('includes the carousel, features, and newsletter sections', () => {
    render(<App />)

    expect(screen.getByText('Carousel Showcase')).toBeInTheDocument()
    expect(screen.getByText('Powerful Carousel Features')).toBeInTheDocument()
    expect(screen.getByText('Stay Updated')).toBeInTheDocument()
  })
})
