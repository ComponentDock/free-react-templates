import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title and renders every section in order', () => {
    render(<App />)

    expect(document.title).toBe('Ironvault — Fitness Trainer Template')

    const h2s = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)
    expect(h2s).toEqual([
      'Some Latest Gym With me',
      'about me',
      'Some Latest Gym With me',
      'Want to start your next workout with me?',
      'Latest Player Showcase',
      'Testimonial',
    ])

    expect(screen.getByRole('heading', { level: 1, name: 'I AM IRONVAULT' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Ironvault home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })
})
