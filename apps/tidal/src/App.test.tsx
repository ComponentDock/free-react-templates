import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Tidal — Discover Your Favorite Place')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Discover Your Favorite Place with Us')

    expect(screen.getByLabelText('Search')).toBeInTheDocument()
    expect(screen.getByLabelText('Services')).toBeInTheDocument()
    expect(screen.getByLabelText('Destinations')).toBeInTheDocument()
    expect(screen.getByLabelText('Tour Packages')).toBeInTheDocument()
    expect(screen.getByLabelText('About')).toBeInTheDocument()
    expect(screen.getByLabelText('Testimonials')).toBeInTheDocument()
    expect(screen.getByLabelText('Blog')).toBeInTheDocument()
    expect(screen.getByLabelText('Call to action')).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
