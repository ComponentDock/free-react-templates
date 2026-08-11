import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import { documentTitle } from './data'

describe('App', () => {
  it('composes the header, navbar, main sections, and footer in order', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(main).toContainElement(screen.getByRole('region', { name: 'Featured video' }))
    expect(main).toContainElement(screen.getByRole('region', { name: 'Trending videos' }))
    expect(main).toContainElement(screen.getByRole('region', { name: 'Video content' }))
  })

  it('sets the document title and renders a skip link', () => {
    render(<App />)
    expect(document.title).toBe(documentTitle)
    expect(screen.getByText('Skip to content')).toBeInTheDocument()
  })
})
