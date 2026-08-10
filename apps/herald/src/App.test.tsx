import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the header, main and footer landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Herald — News Template')
  })

  it('renders key sections end to end', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'TODAY FEATURED' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'POLITICS' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'SPORT' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'NEWSLETTER' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'READ MORE' }).length).toBeGreaterThan(0)
  })
})
