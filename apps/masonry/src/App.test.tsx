import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Masonry — Architecture Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 1, name: /Precise Created Only For You/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /We Are Creating Since 1990/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Service Offerings/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Portfolio Museum/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Testimonials/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Send Us Messages/i })).toBeInTheDocument()
  })
})
