import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Aurora — Style & Fashion Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /New Styles, Suited for You/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What's New/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Peak Collection' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Lookbook' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Why Aurora' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Built to Perform' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Subscribe for our Newsletter/i }),
    ).toBeInTheDocument()
  })
})
