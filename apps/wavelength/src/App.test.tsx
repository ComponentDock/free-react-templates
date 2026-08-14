import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections in the original order inside a main landmark', () => {
    render(<App />)

    const main = screen.getByRole('main')
    const headings = main.querySelectorAll('h1, h2')
    const texts = Array.from(headings, (h) => h.textContent)
    expect(texts).toEqual([
      'Listen — On-Air Now',
      'Art Gossip',
      'Good Morning Show',
      'Blues Radio',
      'Classic Songs',
      'Weekly Radio Program',
      'Love By Our Listeners',
      'Subscribe',
      'Our DJs',
      'News & Events',
    ])
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Wavelength — Radio Station')
  })
})
