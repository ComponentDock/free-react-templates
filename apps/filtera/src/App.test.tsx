import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the search form and footer and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Filtera — Fancy Search Form Template')

    expect(screen.getByLabelText('Search keywords')).toBeInTheDocument()

    expect(screen.getByText('ADVANCED SEARCH')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
