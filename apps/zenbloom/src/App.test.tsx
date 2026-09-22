import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Zenbloom — Yoga Studio Template')
  })

  it('composes every section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Yoga Enhances Your Life/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Outdoor Activities/i)).toBeInTheDocument()
    expect(screen.getByText(/Life in Divine Yoga/i)).toBeInTheDocument()
    expect(screen.getByText(/Our Services/i)).toBeInTheDocument()
    expect(screen.getByText(/What They Are Saying/i)).toBeInTheDocument()
    expect(screen.getByText(/Class Schedule/i)).toBeInTheDocument()
    expect(screen.getByText(/The Best Trainer For You/i)).toBeInTheDocument()
    expect(screen.getByText(/Recent Posts/i)).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/i)).toBeInTheDocument()
  })
})
