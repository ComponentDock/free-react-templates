import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section in source order with a footer crediting Component Dock', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'Keep faith always' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Spreading the faith to all' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Welcome to Creeds Church' })).toBeInTheDocument()
    // "Spreading Light to world" appears in both the features strip and the
    // events cards — count them rather than match a single node.
    expect(screen.getAllByRole('heading', { name: 'Spreading Light to world' })).toHaveLength(2)
    expect(screen.getByRole('heading', { name: 'Sermons This Week' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Your donation can save many lives' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Upcoming Events' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Agency' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('sets a descriptive document title', () => {
    render(<App />)

    expect(document.title).toBe('Creeds — Church Template')
  })
})
