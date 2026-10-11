import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every template band in the reference order', () => {
    render(<App />)
    const ids = Array.from(document.querySelectorAll('section[id]')).map((section) => section.id)
    expect(ids).toEqual([
      'home',
      'services',
      'destination',
      'tour',
      'facts',
      'hotels',
      'why',
      'restaurants',
      'blog',
      'newsletter',
    ])
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Tripforge — Travel Booking Template')
  })
})
