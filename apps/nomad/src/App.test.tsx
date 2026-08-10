import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections in order and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Nomad — Travel Blog Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(
      within(main).getAllByRole('heading', { name: /Switzerland famous/ }).length,
    ).toBeGreaterThan(0)
    expect(within(main).getByRole('heading', { name: /Traveler & Blogger/ })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Destination' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
