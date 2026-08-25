import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Tremolo — Culinary Menu & Accordion Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Exquisite Food/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Menu' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Tremolo' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get in Touch' })).toBeInTheDocument()
  })
})
