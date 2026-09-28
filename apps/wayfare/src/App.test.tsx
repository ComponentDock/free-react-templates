import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the search heading, tabs, form, and footer', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Search Hotels')
    expect(screen.getByRole('tablist', { name: 'Search type' })).toBeInTheDocument()
    expect(screen.getByRole('form', { name: 'Hotel search form' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets a background image on the main section', () => {
    render(<App />)
    const main = screen.getByRole('main')
    expect(main.className).toContain('bg-cover')
  })
})
