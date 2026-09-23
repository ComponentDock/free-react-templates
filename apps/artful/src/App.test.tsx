import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Artful — Creative Art & Crafting Template')
  })

  it('composes every section in the correct order', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Crafting Best Experience/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /We provide best art experience/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Best Services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Video Showcase/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Why Choose Us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Get in Touch/i })).toBeInTheDocument()
  })
})
