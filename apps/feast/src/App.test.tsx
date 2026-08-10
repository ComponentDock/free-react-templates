import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { footerCopyright } from './data'

describe('App', () => {
  it('composes every section and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Feast — Recipes & More')
    expect(screen.getByRole('heading', { name: 'Healthy Recipes' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Amazing deserts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest recipes' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Top rated recipes' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Most liked recipes' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: 'Feta Cheese Burgers' })).toHaveLength(2)
    expect(screen.getByText(footerCopyright)).toBeInTheDocument()
  })
})
