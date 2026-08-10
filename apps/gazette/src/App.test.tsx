import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Gazette — Blog & Magazine')
  })

  it('composes the top bar, navbar, hero, blog sections, sidebar and footer', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Gazette')
    expect(screen.getAllByRole('searchbox')).toHaveLength(2)
    expect(screen.getByRole('heading', { name: 'Lifestyle Category' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'More Blog Posts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Popular Posts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Categories' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Tags' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
