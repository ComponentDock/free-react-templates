import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Roamly — Travel Agency')
  })

  it('renders the skip link as the first focusable element', () => {
    render(<App />)
    const skipLink = screen.getByRole('link', { name: 'Skip to content' })
    expect(skipLink).toHaveAttribute('href', '#main')
    expect(skipLink).toHaveClass('sr-only')
  })

  it('composes every section in the expected order', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Discover Your Next Adventure/,
    )
    expect(screen.getByRole('heading', { level: 2, name: 'Explore the World' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Unforgettable Experiences' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Travel with Confidence' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Travelers Say' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Ready for Your Next Adventure?' }),
    ).toBeInTheDocument()
    expect(screen.getByText('© 2026 Roamly. All rights reserved.')).toBeInTheDocument()
  })

  it('renders the cookie banner and back-to-top button', () => {
    render(<App />)
    expect(screen.getByRole('dialog', { name: 'Cookie consent' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()
  })
})
