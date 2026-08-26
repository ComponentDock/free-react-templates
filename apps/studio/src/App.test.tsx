import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Hero section', () => {
    render(<App />)
    expect(screen.getByRole('region', { name: /hero/i })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Studio — Creative Studio Landing')
  })

  it('renders the headline', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('The Studio')
  })
})
