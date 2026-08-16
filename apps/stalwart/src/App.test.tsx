import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Stalwart — Construction Company')
  })

  it('composes all sections in the original order', () => {
    render(<App />)
    const main = screen.getByRole('main')
    expect(main).toContainElement(screen.getByRole('heading', { level: 1 }))
    expect(main).toContainElement(
      screen.getByRole('heading', { level: 2, name: /Our Promise and Values/i }),
    )
    expect(main).toContainElement(
      screen.getByRole('heading', { level: 2, name: /Services We Offer/i }),
    )
    expect(main).toContainElement(
      screen.getByRole('heading', { level: 2, name: /Unique Apartment Formats/i }),
    )
    expect(main).toContainElement(screen.getByRole('heading', { level: 2, name: /Our Team/i }))
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the back-to-top control', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /back to top/i })).toBeInTheDocument()
  })
})
