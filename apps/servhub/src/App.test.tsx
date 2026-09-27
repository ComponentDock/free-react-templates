import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Servhub — Digital Services Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /We Are Digital Services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /About Us/i })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: 'Services' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What Clients Are Saying/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Blog Posts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Form' })).toBeInTheDocument()
  })
})
