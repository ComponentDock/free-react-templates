import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Panorama — Web Agency Portfolio')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /We Are Panorama/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Who Are You Guys/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Portfolio' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /We Are Web Agency/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Blog Posts' })).toBeInTheDocument()
  })
})
