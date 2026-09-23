import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title and renders all sections', () => {
    render(<App />)

    expect(document.title).toBe('Cardwell — Personal vCard & Portfolio')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('region', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /portfolio/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /blog/i })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: /testimonials/i })).toBeInTheDocument()
  })
})
