import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import { documentTitle, skipLabel } from './data'

describe('App', () => {
  it('composes the header, main sections, and footer in order', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(main).toContainElement(screen.getByRole('region', { name: 'Recent posts' }))
    expect(main).toContainElement(screen.getByRole('region', { name: 'Featured posts' }))
    expect(main).toContainElement(
      screen.getByRole('region', { name: 'Featured posts with sidebar' }),
    )
  })

  it('sets the document title and renders a skip link', () => {
    render(<App />)
    expect(document.title).toBe(documentTitle)
    expect(screen.getByText(skipLabel)).toBeInTheDocument()
  })
})
