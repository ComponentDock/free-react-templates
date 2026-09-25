import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /welcome to taster/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /find your best food/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /the restaurant/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /meet the chefs/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /^menu$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /other services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /reservation/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /customer reviews/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /get in touch/i })).toBeInTheDocument()
    expect(screen.getByText('About Taster')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Taster — Restaurant Template')
  })
})
