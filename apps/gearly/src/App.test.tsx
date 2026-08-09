import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Gearly — Driving School Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 1, name: /Drive safe & get license/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our feature/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Looking for lessons/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Application Form/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Pricing/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Instructors/i })).toBeInTheDocument()
  })
})
