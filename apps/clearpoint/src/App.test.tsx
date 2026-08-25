import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Adviso — Consulting Template')
  })

  it('composes all sections in the original order', () => {
    render(<App />)
    const main = screen.getByRole('main')
    expect(main).toContainElement(screen.getByRole('heading', { level: 1 }))
    expect(main).toContainElement(
      screen.getByRole('heading', {
        level: 3,
        name: /Foremost & Premier Source For Everything Business/i,
      }),
    )
    expect(main).toContainElement(
      screen.getByRole('heading', {
        level: 2,
        name: /consulting solutions for the streaming era/i,
      }),
    )
    expect(main).toContainElement(
      screen.getByRole('heading', {
        level: 2,
        name: /boost our clients. bottom line by optimizing/i,
      }),
    )
    expect(main).toContainElement(screen.getByRole('heading', { level: 2, name: 'Case study' }))
    expect(main).toContainElement(
      screen.getByRole('heading', { level: 2, name: /Partner for your business/i }),
    )
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the back-to-top control', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /back to top/i })).toBeInTheDocument()
  })
})
