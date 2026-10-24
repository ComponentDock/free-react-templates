import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Flint — Design Studio Template')
  })

  it('composes the sections in reference order', () => {
    const { container } = render(<App />)

    const ids = Array.from(container.querySelectorAll('[id]')).map((node) => node.id)
    const order = ['home', 'about', 'services', 'blog', 'features', 'products', 'contact']
    const positions = order.map((id) => ids.indexOf(id))

    expect(positions.every((position) => position >= 0)).toBe(true)
    expect([...positions].sort((a, b) => a - b)).toEqual(positions)
  })

  it('renders the navigation, hero and footer of the page', () => {
    render(<App />)

    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Design is not just what it looks like design is how it works',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
