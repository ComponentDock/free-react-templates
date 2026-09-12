import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText('New Arrivals')).toBeInTheDocument()
    expect(screen.getByText('Crafted with Intention')).toBeInTheDocument()
    expect(screen.getByText('What People Say')).toBeInTheDocument()
    expect(screen.getByText('From the Journal')).toBeInTheDocument()
    expect(screen.getByText('Stay in the Loop')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Silhouette — Apparel Store Template')
  })
})
