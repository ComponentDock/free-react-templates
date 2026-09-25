import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Cadence — Music Artist Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Cadence Cadence/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Artist Bio/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Upcoming Shows/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Now Playing/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Love is all Around/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^Music$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^Artists$/i })).toBeInTheDocument()
  })
})
