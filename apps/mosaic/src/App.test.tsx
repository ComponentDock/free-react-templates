import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

const SECTIONS = [
  ['Featured works', 'region'],
  ['Our Services', 'heading'],
  ['Subscribe', 'region'],
  ['Works', 'heading'],
  ['Customer Says', 'heading'],
  ['Our achievements', 'heading'],
  ['Blog', 'heading'],
] as const

describe('App', () => {
  it('renders every section in the original order', () => {
    render(<App />)

    const root = document.body
    const bodies = Array.from(root.querySelectorAll('*'))
    let lastIndex = -1
    for (const [name, role] of SECTIONS) {
      const el =
        role === 'region'
          ? screen.getByRole('region', { name })
          : screen.getByRole('heading', { level: 2, name })
      const index = bodies.indexOf(el)
      expect(index).toBeGreaterThan(lastIndex)
      lastIndex = index
    }
  })

  it('renders the hero as the first landmark and the cocoa footer last', () => {
    render(<App />)

    const hero = screen.getByRole('region', { name: 'Home' })
    const footer = document.querySelector('footer')!
    const bodies = Array.from(document.body.querySelectorAll('*'))
    expect(bodies.indexOf(hero)).toBeLessThan(bodies.indexOf(footer))
    expect(footer).toHaveClass('bg-cocoa')
    expect(screen.getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Mosaic — Digital Agency')
  })
})
