import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Modista — Fashion E-Commerce Shop')
  })

  it('composes every section', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText('Best Summer Collection')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Latest Product/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /From The Blog/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Featured Products/i })).toBeInTheDocument()
  })
})
