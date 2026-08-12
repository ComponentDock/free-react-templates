import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title and renders every section in order', () => {
    render(<App />)

    expect(document.title).toBe('Vigor — Fitness Gym Template')

    const h2s = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)
    expect(h2s).toEqual([
      'Get fit & healthy.',
      'Why choose Vigor?',
      'Ask the experts',
      '$50 / Month',
      '$70 / Month',
      '$90 / Month',
      'Working Hours',
      'Our Newsletter',
    ])

    expect(screen.getByRole('link', { name: /Vigor home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })
})
