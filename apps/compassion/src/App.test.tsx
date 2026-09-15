import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Compassion — Church Website Template')
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /welcome to compassion/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Audio Sermons' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Latest Events' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Personal Testimony' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
