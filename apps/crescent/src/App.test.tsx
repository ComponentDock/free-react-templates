import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByTestId('top-bar')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('about')).toBeInTheDocument()
    expect(screen.getByTestId('call-to-action')).toBeInTheDocument()
    expect(screen.getByTestId('sermons')).toBeInTheDocument()
    expect(screen.getByTestId('events')).toBeInTheDocument()
    expect(screen.getByTestId('gallery')).toBeInTheDocument()
    expect(screen.getByTestId('blog')).toBeInTheDocument()
    expect(screen.getByTestId('subscribe')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Crescent — Church Community Template')
  })

  it('has correct section order', () => {
    render(<App />)
    const main = screen.getByRole('main')
    const children = Array.from(main.children)
    const testIds = children.map((el) => el.getAttribute('data-testid'))
    expect(testIds).toEqual([
      'hero',
      'about',
      'call-to-action',
      'sermons',
      'events',
      'gallery',
      'blog',
      'subscribe',
    ])
  })
})
