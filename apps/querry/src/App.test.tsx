import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the search hero, category nav, and footer', () => {
    render(<App />)

    expect(document.title).toBe('Querry — Fashion Search Form Hero Template')

    expect(
      screen.getByRole('heading', { level: 1, name: /what are you looking for/i }),
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /search/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()

    expect(screen.getByText('New Arrivals')).toBeInTheDocument()
    expect(screen.getByText('Accessories')).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
