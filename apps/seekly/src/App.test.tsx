import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the search hero and footer and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Seekly — Search Form Hero Template')

    expect(
      screen.getByRole('heading', { level: 1, name: /discover the amazing city/i }),
    ).toBeInTheDocument()

    expect(screen.getByLabelText('Search query')).toBeInTheDocument()
    expect(screen.getByLabelText('Location')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
