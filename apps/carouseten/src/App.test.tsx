import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the brand name', () => {
    render(<App />)
    expect(screen.getAllByText('Carouseten').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the hero heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /beautiful carousel showcase/i }),
    ).toBeInTheDocument()
  })
})
