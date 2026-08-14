import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

const SECTIONS = [
  ['Hero slider', 'region'],
  ['Free lessons and offers', 'region'],
  ['Fitness Program', 'heading'],
  ['Get a Perfect Body', 'heading'],
  ['Training Schedule', 'region'],
  ['About the club', 'region'],
  ['What Client Says', 'heading'],
  ['Our Coaches', 'heading'],
  ['Our Blog', 'heading'],
  ['Contact Me', 'heading'],
  ['Map', 'region'],
  ['See the latest photos', 'heading'],
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

  it('renders the black footer last with the Component Dock credit', () => {
    render(<App />)

    const footer = document.querySelector('footer')!
    expect(footer).toHaveClass('bg-ink')
    expect(screen.getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Shred — Fitness Club')
  })
})
